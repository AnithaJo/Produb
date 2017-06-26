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


namespace ggapi.Controllers
{
    

    public struct SamplePerform
    {
        public int Id;
        public int employee;
        public string tech_name;
        public string region;
        public string operation;
        public double time;

    }
    public struct SampleInput
    {
        public string Region;
        public string Operation_Name;
    }
    public struct ChartData
    {
        public decimal[] sum1 ;
        public string region;
        public ChartData(int c)
        {
            region = "";
           sum1 = new decimal[c];
    }
       
    }
    public class PerformancesController : ApiController
    {
        int count = 0;
        public List<object> parameterList = new List<object>();
        public List<string> region = new List<string>();
        public List<string> operation = new List<string>();
        private ExperimentEntities111 db = new ExperimentEntities111();

        // GET: api/Performances
        public IQueryable<Performance> GetPerformances()
        {
            return db.Performances;
        }

        // GET: api/Performances/5
        [ResponseType(typeof(Performance))]
        public IHttpActionResult GetPerformance(int id)
        {
            Performance performance = db.Performances.Find(id);
            if (performance == null)
            {
                return NotFound();
            }

            return Ok(performance);
        }

        // PUT: api/Performances/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPerformance(int id, Performance performance)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != performance.Id)
            {
                return BadRequest();
            }

            db.Entry(performance).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PerformanceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        //display details
        [ResponseType(typeof(Performance))]
        public SamplePerform[] PostChart([FromBody] SampleInput ip)
        {
            var k = 0;
            var i = 0;
            var r = ip.Region;
            var o = ip.Operation_Name;
            
            var data3 = from c in db.Performances
                        where c.Region == r && c.Operation_name == o
                        select c;
            foreach (var cus in data3)
                k++;
            SamplePerform[] perform = new SamplePerform[k];
            foreach(var b in data3)
            {
                perform[i].Id = b.Id;
                perform[i].employee = b.e_Id;
                perform[i].operation = b.Operation_name;
                perform[i].region = b.Region;
                perform[i].tech_name = b.Technology_name;
                perform[i].time = b.Time_Taken;
                i++;
            }
            return perform;
        }

        //data for chart
        // POST: api/Performances
        [ResponseType(typeof(Performance))]
        public ChartData[] PostPerformance([FromBody] string hey1)
        {
            string sql = "SELECT DISTINCT Operation_name from Performance";
            string sql1 = "SELECT DISTINCT Region from Performance";
            
            //string sql2 = "SELECT Time_Taken from Performance where Technology_name=@tech AND Region=@reg";
            //SqlParameter userSupplied = new SqlParameter("@i", hey1);
            //var data3 = from c in db.Performances
            //                   where c.Technology_name == "FCC"
            //                   select c;


            



            //parameterList.Add("FCC");
            //object[] parameters1 = parameterList.ToArray();
            //DbRawSqlQuery<Performance> data = db.Database.SqlQuery<Performance>(sql, parameters1);
            //foreach (var cus in data1)
            //{
            //    region.Add(cus);

            //}
            DbRawSqlQuery<string> data1 = db.Database.SqlQuery<string>(sql1);

            
            var region = data1.Cast<string>().ToArray();
            //string[] place = new string[k];
            //double[] sum = new double[k];
            //var place=region.ToArray();
            DbRawSqlQuery<string> data4 = db.Database.SqlQuery<string>(sql);
            var op = data4.Cast<string>().ToArray();
            //foreach (var cus in data4)
            //{
            //    operation.Add(cus);

            //}
            //var op = operation.ToArray();
            List<decimal> test = new List<decimal>();
            for (var i=0; i< region.Length;i++)
            {
                //parameterList.Clear();
                ////SqlParameter reg = new SqlParameter("@reg", place[i]);
                //parameterList.Add(hey1);
                //parameterList.Add(place[i]);
                //object[] parameters2 = parameterList.ToArray();
                //DbRawSqlQuery<double> data2 = db.Database.SqlQuery<double>(sql2,parameters2);
                var p = region[i];
                for (var j = 0; j < op.Length; j++)
                {
                    var o = op[j];
                    var data2 = (from c in db.Performances
                                where c.Technology_name == hey1 && c.Region == p && c.Operation_name == o
                                orderby c.Region
                                select c.Time_Taken).Average();
                    var w = Convert.ToDecimal(data2);
                    test.Add(w);
                }
                
            }
            var sum = test.ToArray();
            var s = Enumerable.Range(0, region.Length).Select(i => new ChartData(op.Length)).ToArray();
            //ChartData[] s = new ChartData[region.Length];
            
      
            
            for(var j = 0; j < region.Length; j++)
            {
                s[j].region = region[j];
                for (var a = 0; a < op.Length; a++)
                {
                  
                    s[j].sum1[a] = sum[count];
                    count++;
                }
                

            }
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            //db.Performances.Add(performance);

            //try
            //{
            //    db.SaveChanges();
            //}
            //catch (DbUpdateException)
            //{
            //    if (PerformanceExists(performance.Id))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return CreatedAtRoute("DefaultApi", new { id = performance.Id }, performance);
            return s;
        }

        [ResponseType(typeof(Performance))]
        //public ChartData[] GetInitChart()
        //{
        //    int k = 0;
        //    int l = 0;
        //    int count = 0;
            
        //    string sql1 = "SELECT DISTINCT Region from Performance";
        //    string sql2 = "select avg(Time_Taken) from Performance group by Region,Operation_name ";
        //    DbRawSqlQuery<double> data12 = db.Database.SqlQuery<double>(sql2);
        //    foreach(var cus in data12)
        //    {
        //        k++;
        //    }
        //    double[] sum = new double[k];
        //    foreach(var p in data12)
        //    {
        //        sum[l] = p;
        //        l++;
        //    }
        //    DbRawSqlQuery<string> data1 = db.Database.SqlQuery<string>(sql1);
        //    var region = data1.Cast<string>().ToArray();
        //    var s = Enumerable.Range(0, region.Length).Select(i => new ChartData(3)).ToArray();
           



        //    for (var j = 0; j < region.Length; j++)
        //    {
        //        s[j].region = region[j];
        //        for (var a = 0; a < 3; a++)
        //        {

        //            s[j].sum1[a] = sum[count];
        //            count++;
        //        }


        //    }
        //    return s;
        //}

        // DELETE: api/Performances/5
        [ResponseType(typeof(Performance))]
        public IHttpActionResult DeletePerformance(int id)
        {
            Performance performance = db.Performances.Find(id);
            if (performance == null)
            {
                return NotFound();
            }

            db.Performances.Remove(performance);
            db.SaveChanges();

            return Ok(performance);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PerformanceExists(int id)
        {
            return db.Performances.Count(e => e.Id == id) > 0;
        }
    }
}