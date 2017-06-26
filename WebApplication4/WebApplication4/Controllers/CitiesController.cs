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
using WebApplication4.Models;

namespace WebApplication4.Controllers
{
    public class CitiesController : ApiController
    {
        private MasterJeeEntities db = new MasterJeeEntities();

        // GET: api/Cities
        public IQueryable<Cities> GetCities()
        {
            return db.Cities;
        }

        // GET: api/Cities/5
        [ResponseType(typeof(Cities))]
        public IHttpActionResult GetCities(int id)
        {
            Cities cities = db.Cities.Find(id);
            if (cities == null)
            {
                return NotFound();
            }

            return Ok(cities);
        }

        // PUT: api/Cities/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCities(int id, Cities cities)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cities.Id)
            {
                return BadRequest();
            }

            db.Entry(cities).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CitiesExists(id))
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

        // POST: api/Cities
        [ResponseType(typeof(Cities))]
        public IHttpActionResult PostCities(Cities cities)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Cities.Add(cities);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (CitiesExists(cities.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = cities.Id }, cities);
        }

        // DELETE: api/Cities/5
        [ResponseType(typeof(Cities))]
        public IHttpActionResult DeleteCities(int id)
        {
            Cities cities = db.Cities.Find(id);
            if (cities == null)
            {
                return NotFound();
            }

            db.Cities.Remove(cities);
            db.SaveChanges();

            return Ok(cities);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CitiesExists(int id)
        {
            return db.Cities.Count(e => e.Id == id) > 0;
        }
    }
}