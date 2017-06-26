using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Data.SqlClient;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ggapi.Models;

namespace ggapi.Controllers
{
    public class Estimate_CommonController : ApiController
    {
        int num;
      
        private ExperimentEntities111 db = new ExperimentEntities111();

        // GET: api/Estimate_Common
        public IQueryable<Estimate_Common> GetEstimate_Common()
        {
            return db.Estimate_Common;
        }

        // GET: api/Estimate_Common/5
        [ResponseType(typeof(Estimate_Common))]
        public IHttpActionResult GetEstimate_Common(int id)
        {
            Estimate_Common estimate_Common = db.Estimate_Common.Find(id);
            if (estimate_Common == null)
            {
                return NotFound();
            }

            return Ok(estimate_Common);
        }

        // PUT: api/Estimate_Common/5
        [ResponseType(typeof(void))]
        public int[] PostEstimate_Common([FromBody]int val)
        {
            int[] data = new int[] { 0,0,0,0};
            int i = 0;
            num = val;
            //var sql1 = "Select Count(Creation_date) from Estimate_Common where Creation_date > DATEADD(month, val, GETDATE()) groupby Estimate_Status";
            DbRawSqlQuery<int> data1 = db.Database.SqlQuery<int>("Select count(Creation_date) from Estimate_Common where Creation_date > DATEADD(month, @Id, GETDATE()) group by Estimate_Status", new SqlParameter("Id", val));
            
            foreach (var cus in data1)
            {
                data[i] = cus;
                i++;
            }
            if (i < 3)
            {
                data[2]=data[1];
                data[1] = data[0];
                data[0] = 0;
            }
            DbRawSqlQuery<int> data2 = db.Database.SqlQuery<int>("Select count(Distinct Employee_Id) from Estimate_Common where Creation_date > DATEADD(month, @Id1, GETDATE())", new SqlParameter("Id1", val));
            data[3] = data2.Cast<int>().ElementAt(0);
            //foreach(var q in data2)
            //{
            //    data[3] = data[3]+ q;
            //}
            return data;
        }

        // POST: api/Estimate_Common
        [ResponseType(typeof(Estimate_Common))]
        public int[] PostEstimate_Common1([FromBody]int val)
        {
            int size = 0;
            int i = 0;
            var j = new SqlParameter("kitty", val);

            var sampl = db.f_Test_Estimate(val).ToList() ;
            //List<string> test = db.f_Test_Estimate(val);
            size = sampl.Count();
           
            int[] data = new int[size];

           foreach(var cus in sampl)
            {
                data[i] = Convert.ToInt32(cus);
                i++;
            }
            return data;
        }
        [ResponseType(typeof(Estimate_Common))]
        public int[] PostEstimate_Common2([FromBody]int val)
        {
            int i = 0;
            var data2 = db.f_Test_Emp(val).ToList();
            int size = data2.Count();
            int[] data = new int[size];
            foreach(var cus in data2)
            {
                data[i] = Convert.ToInt32( cus);
                i++;
            }
            return data;
        }

        // DELETE: api/Estimate_Common/5
        [ResponseType(typeof(Estimate_Common))]
        public IHttpActionResult DeleteEstimate_Common(int id)
        {
            Estimate_Common estimate_Common = db.Estimate_Common.Find(id);
            if (estimate_Common == null)
            {
                return NotFound();
            }

            db.Estimate_Common.Remove(estimate_Common);
            db.SaveChanges();

            return Ok(estimate_Common);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Estimate_CommonExists(int id)
        {
            return db.Estimate_Common.Count(e => e.Estimate_Id == id) > 0;
        }
    }
}