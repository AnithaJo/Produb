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
using ggapi.Models;

namespace ggapi.Controllers
{
     
    public class YES_ESTIMATE_COMMONController : ApiController

    {
        public class Report_Parameters
        {
            public string tech;
            public int time;

            public string status;
        }
        public class Report_Parameters1
        {
           
            public string tech;
            public DateTime time1;
            public DateTime time2;
            public string status;
        }
        private UOP_YES1QEntities1 db = new UOP_YES1QEntities1();

        // GET: api/YES_ESTIMATE_COMMON
        public DbRawSqlQuery<string> GetTechnology()
        {
            var str1 = "select distinct technology_cd from yes_estimate_common";
            DbRawSqlQuery<string> data1 = db.Database.SqlQuery<string>(str1);

            return data1;
        }
        public List<ggapi.Models.Dashboard_EstimatorReport_SP_Result> PostYES_ESTIMATE_COMMON3([FromBody]Report_Parameters hey)
        {
            var data = db.Dashboard_EstimatorReport_SP(hey.time, hey.tech).ToList();
            return data;
        }
        public List<ggapi.Models.Dashboard_MonthlyReport_SP1_Result> PostYES_ESTIMATE_COMMON2([FromBody]Report_Parameters1 hey)
        {
            var data = db.Dashboard_MonthlyReport_SP1(hey.time2,hey.time1,hey.tech).ToList();
            return data;
        }

       
        // GET: api/YES_ESTIMATE_COMMON/5
        [ResponseType(typeof(YES_ESTIMATE_COMMON))]
        public List<ggapi.Models.Dashboard_AllEstmates_SP_Result1> PostYES_ESTIMATE_COMMON1([FromBody]Report_Parameters hey)
        {
            
            var data = db.Dashboard_AllEstmates_SP(hey.tech,hey.time,hey.status).ToList();
            return data;
        }

        // PUT: api/YES_ESTIMATE_COMMON/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutYES_ESTIMATE_COMMON(int id, YES_ESTIMATE_COMMON yES_ESTIMATE_COMMON)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != yES_ESTIMATE_COMMON.ESTIMATE_ID_SQ)
            {
                return BadRequest();
            }

            db.Entry(yES_ESTIMATE_COMMON).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!YES_ESTIMATE_COMMONExists(id))
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

        // POST: api/YES_ESTIMATE_COMMON
        [ResponseType(typeof(YES_ESTIMATE_COMMON))]
        public IHttpActionResult PostYES_ESTIMATE_COMMON(YES_ESTIMATE_COMMON yES_ESTIMATE_COMMON)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.YES_ESTIMATE_COMMON.Add(yES_ESTIMATE_COMMON);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = yES_ESTIMATE_COMMON.ESTIMATE_ID_SQ }, yES_ESTIMATE_COMMON);
        }

        // DELETE: api/YES_ESTIMATE_COMMON/5
        [ResponseType(typeof(YES_ESTIMATE_COMMON))]
        public IHttpActionResult DeleteYES_ESTIMATE_COMMON(int id)
        {
            YES_ESTIMATE_COMMON yES_ESTIMATE_COMMON = db.YES_ESTIMATE_COMMON.Find(id);
            if (yES_ESTIMATE_COMMON == null)
            {
                return NotFound();
            }

            db.YES_ESTIMATE_COMMON.Remove(yES_ESTIMATE_COMMON);
            db.SaveChanges();

            return Ok(yES_ESTIMATE_COMMON);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool YES_ESTIMATE_COMMONExists(int id)
        {
            return db.YES_ESTIMATE_COMMON.Count(e => e.ESTIMATE_ID_SQ == id) > 0;
        }
    }
}