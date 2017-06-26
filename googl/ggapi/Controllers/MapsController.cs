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
using System.Data.SqlClient;
namespace ggapi.Controllers
{
    public struct SampleMap
    {
        public int Id { get; set; }
        public double lat { get; set; }
        public double lng { get; set; }
    }
    public struct Incoming
    {
        public double lat { get; set; }
        public double lng { get; set; }
    }
    public class MapsController : ApiController
    {
        private ExperimentEntities111 db = new ExperimentEntities111();

        // GET: api/Maps
        public SampleMap[] GetMaps()
        {
            var j = 0;
            var i = 0;
            var q = from c in db.Maps select c;

            foreach (var cust in q)
                j++;
            SampleMap[] s = new SampleMap[j];


            foreach (var cust in q)
            {
                s[i].lng = cust.@long;
                s[i].lat = cust.lat;
                s[i].Id = cust.Id;
                i++;
            }
            return s;
        }

        // GET: api/Maps/5
        [ResponseType(typeof(Map))]
        public IHttpActionResult GetMap(int id)
        {
            Map map = db.Maps.Find(id);
            if (map == null)
            {
                return NotFound();
            }

            return Ok(map);
        }

        // PUT: api/Maps/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutMap(int id, Map map)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != map.Id)
            {
                return BadRequest();
            }

            db.Entry(map).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MapExists(id))
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

        // POST: api/Maps
        [ResponseType(typeof(Map))]
        public SampleMap[] PostMap([FromBody] int hey1)
        {
           
            var k = 0;
            var l = 0;
            //var p = from c in db.Maps select c;
            string sql = "SELECT * from Maps where Id=@i ";
            SqlParameter userSuppliedAuthor = new SqlParameter("@i", hey1);
          DbRawSqlQuery<Map> data = db.Database.SqlQuery<Map>(sql,userSuppliedAuthor);

            //foreach (var cus in data)
            
            //    k++;
                SampleMap[] s2 = new SampleMap[2];
            //List<SampleMap> s3 = new List<SampleMap>();

            foreach (var cus12 in data)
            {
                s2[l].lng = cus12.@long;
                s2[l].lat = cus12.lat;
                s2[l].Id = cus12.Id;
                l++;
            }
            //switch (hey1)
            //{
            //    case 1: s2[0]= s1[0];
            //        s2[1] = s1[0]; 
            //        break;
            //    case 2: s2[0] = s1[1];
            //        s2[1] = s1[1];
            //        break;
            //    case 3: s2[0]=s1[2];
            //        s2[1] = s1[2];
            //        break;
            //}

            return s2;


            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            //db.Maps.Add(map);

            //try
            //{
            //    db.SaveChanges();
            //}
            //catch (DbUpdateException)
            //{
            //    if (MapExists(map.Id))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return CreatedAtRoute("DefaultApi", new { id = map.Id }, map);
        }

        public SampleMap[] PostMap1([FromBody] Incoming hey1)
        {
            var k = hey1.lat;
            var j = hey1.lng;
            SampleMap[] h = new SampleMap[2];
            var p = from c in db.Maps select c;
            
            foreach (var cus in p)
              
            { if (k == cus.lat && j == cus.@long)
                {
                    h[0].lat = k;
                    h[0].lng = j;
                    h[0].Id = cus.Id;
                }
                    }
            return h;
        }

        // DELETE: api/Maps/5
        [ResponseType(typeof(Map))]
        public IHttpActionResult DeleteMap(int id)
        {
            Map map = db.Maps.Find(id);
           
            if (map == null)
            {
                return NotFound();
            }

            db.Maps.Remove(map);
            db.SaveChanges();

            return Ok(map);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MapExists(int id)
        {
            return db.Maps.Count(e => e.Id == id) > 0;
        }
    }
}