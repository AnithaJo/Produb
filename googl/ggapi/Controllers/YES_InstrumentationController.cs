using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Data.SqlClient;
using ggapi.Models;
using System.Data.Entity.Core.Objects.DataClasses;

namespace ggapi.Controllers
{
    public struct Perform
    {
        public int employee;
        public string tech_name;
        public string region;
        public string operation;
        public double time;

    }
    public class YES_InstrumentationController : ApiController
    {
        public partial class YourObjectContext
        {
            /// <summary>
            ///     This method exists for use in LINQ queries,
            ///     as a stub that will be converted to a SQL CAST statement.
            /// </summary>
            [EdmFunction("UOP_YES1QModel", "ParseDouble")]
            public static double ParseDouble(string stringvalue)
            {
                return Double.Parse(stringvalue);
            }
        }

        private UOP_YES1QEntities1 db = new UOP_YES1QEntities1();

        public string[] GetRegion()
        {
            var region = db.f_Test_Procedure_Region().ToArray();
            return region;
        }
        // GET: api/YES_Instrumentation
        public ChartData[] GetYES_Instrumentation1()
        {
            //return db.YES_Instrumentation;
            int k = 0;
            int l = 0;
            int count = 0;
            string old_region = "";
            string new_region = "";
            string sql = "SELECT avg(CAST(ELAPSED_TIME AS float)) from YES_Instrumentation group by USER_CURRENT_REGION,TASK";
            string sql1 = "SELECT DISTINCT USER_CURRENT_REGION from YES_Instrumentation";
            //string sql2 = "select avg(ELAPSED_TIME) from AView group by USER_CURRENT_REGION,TASK ";

            //var w =db.Database.SqlQuery<YES_Instrumentation>(sql);
            var data12 = db.Database.SqlQuery<double>(sql);
            //foreach (var cus in data12)
            //{
            //    k++;
            //}
            DbRawSqlQuery<string> data1 = db.Database.SqlQuery<string>(sql1);
            var region = data1.Cast<string>().ToArray();
            var s = Enumerable.Range(0, region.Length).Select(i => new ChartData(3)).ToArray();
            decimal[] sum = new decimal[((region.Length) * 3)];
            //            old_region = data12[0].region;
            //            sum[0] = Convert.ToDecimal(data12[0].time1);
            //for(var j=0;j<data12.Length;j++)
            //            {
            //                new_region = data12[j].region;

            //             if ((new_region != old_region) && count <3 && k==0)
            //                {
            //                    for(var i=count;i<2;i++)
            //                    {
            //                        l++;
            //                    }
            //                    count = 0;

            //                    k = 0;
            //                }
            //                else
            //                {
            //                    k = 0;
            //                    sum[l] = Convert.ToDecimal(data12[j].time1);
            //                    count++;
            //                    if (count == 3)
            //                    {
            //                        count = 0;
            //                        k=1;
            //                    }
            //                }
            //                //if ((new_region != old_region) && (count == 4))
            //                //{
            //                //    count = 1;

            //                //}
            //                l++;
            //                old_region = new_region;
            //            }


            if (!data12.Any())
            {
                sum[l] = 0;
                l++;
            }
            else
            {
                foreach (var p in data12)
                {
                    var c = Convert.ToDecimal(p);
                    sum[l] = c;
                    l++;
                }
            }



            for (var j = 0; j < region.Length; j++)
            {
                s[j].region = region[j];
                for (var a = 0; a < 3; a++)
                {

                    s[j].sum1[a] = sum[count];
                    count++;
                }


            }
            return s;
        }


        // GET: api/YES_Instrumentation/5
        [ResponseType(typeof(YES_Instrumentation))]
        public IHttpActionResult GetYES_Instrumentation(string id)
        {
            YES_Instrumentation yES_Instrumentation = db.YES_Instrumentation.Find(id);
            if (yES_Instrumentation == null)
            {
                return NotFound();
            }

            return Ok(yES_Instrumentation);
        }

        // PUT: api/YES_Instrumentation/5
        [ResponseType(typeof(void))]
        public ChartData[] PostYES_Instrumentation1([FromBody] string hey1)
        {
            string[] op = new string[]
                {
                    "Get", "Save", "Landing"
                };


            int l = 0;
            //int count = 0;
            //string sql = "SELECT avg(CAST(ELAPSED_TIME AS float)) FROM YES_Instrumentation  group by USER_CURRENT_REGION,TASK";
            //string sql1 = "SELECT DISTINCT USER_CURRENT_REGION from YES_Instrumentation";

            //DbRawSqlQuery<string> data1 = db.Database.SqlQuery<string>(sql1);


            var region = db.f_Test_Procedure_Region().ToArray();

            var s = Enumerable.Range(0, region.Length).Select(i => new ChartData(op.Length)).ToArray();
            decimal[] sum = new decimal[((region.Length) * 3)];

            //List<decimal> test = new List<decimal>();
            //for (var i = 0; i < region.Length; i++)
            //{
            int flag = 0;
            for (var j = 0; j < op.Length; j++)
            {




                //var data2 = from c in db.YES_Instrumentation
                //             where c.TECHNOLOGY_CD == hey1 && c.USER_CURRENT_REGION == p && c.TASK == o
                //             orderby c.USER_CURRENT_REGION
                //            select c.ELAPSED_TIME;

                var data = db.f_Test_Procedure_try6(hey1, op[j]).ToList();
                //data.ForEach(x => Convert.ToDecimal(x));
                for (var b = 0; b < region.Length; b++)
                {

                    flag = 0;
                    var t = 0;
                    var u = 0;
                    while (t<data.Count)
                    {
                        if (region[b] == data[t].USER_CURRENT_REGION)
                        {
                            flag = 1;
                            u = t;
                            break;
                        }
                        t++;
                    }
                    if (flag == 1)
                    {
                        var w = Convert.ToDecimal(data[u].REs);
                        sum[l] = w;
                        l++;
                    }
                    else
                    {
                        sum[l] = 0;
                        l++;
                    }

                }
                //var q = Convert.ToDouble(data);


                //var w = Convert.ToString(data2);
                //var d = Convert.ToDecimal(w);


            }





            for (var j = 0; j < region.Length; j++)
            {
                s[j].region = region[j];
                for (var a = 0; a < op.Length; a++)
                {

                    s[j].sum1[a] = sum[j + (a * (region.Length))];

                }


            }

            return s;
        }

        // POST: api/YES_Instrumentation
        [ResponseType(typeof(YES_Instrumentation))]
        public IHttpActionResult PostYES_Instrumentation(YES_Instrumentation yES_Instrumentation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.YES_Instrumentation.Add(yES_Instrumentation);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (YES_InstrumentationExists(yES_Instrumentation.EMPLOYEE_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = yES_Instrumentation.EMPLOYEE_ID }, yES_Instrumentation);
        }

        // DELETE: api/YES_Instrumentation/5
        [ResponseType(typeof(YES_Instrumentation))]
        public IHttpActionResult DeleteYES_Instrumentation(string id)
        {
            YES_Instrumentation yES_Instrumentation = db.YES_Instrumentation.Find(id);
            if (yES_Instrumentation == null)
            {
                return NotFound();
            }

            db.YES_Instrumentation.Remove(yES_Instrumentation);
            db.SaveChanges();

            return Ok(yES_Instrumentation);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool YES_InstrumentationExists(string id)
        {
            return db.YES_Instrumentation.Count(e => e.EMPLOYEE_ID == id) > 0;
        }
    }
}