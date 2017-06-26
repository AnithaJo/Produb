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
    public class WebSitesController : ApiController
    {
        private ExperimentEntities111 db = new ExperimentEntities111();

        // GET: api/WebSites
        public IQueryable<WebSite> GetWebSites()
        {
            return db.WebSites;
        }

        // GET: api/WebSites/5
        [ResponseType(typeof(WebSite))]
        public IHttpActionResult GetWebSite(int id)
        {
            WebSite webSite = db.WebSites.Find(id);
            if (webSite == null)
            {
                return NotFound();
            }

            return Ok(webSite);
        }

        // PUT: api/WebSites/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWebSite(int id, WebSite webSite)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != webSite.Id)
            {
                return BadRequest();
            }

            db.Entry(webSite).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WebSiteExists(id))
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

        // POST: api/WebSites
        [ResponseType(typeof(WebSite))]
        public IHttpActionResult PostWebSite(WebSite webSite)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.WebSites.Add(webSite);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (WebSiteExists(webSite.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = webSite.Id }, webSite);
        }

        // DELETE: api/WebSites/5
        [ResponseType(typeof(WebSite))]
        public IHttpActionResult DeleteWebSite(int id)
        {
            WebSite webSite = db.WebSites.Find(id);
            if (webSite == null)
            {
                return NotFound();
            }

            db.WebSites.Remove(webSite);
            db.SaveChanges();

            return Ok(webSite);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WebSiteExists(int id)
        {
            return db.WebSites.Count(e => e.Id == id) > 0;
        }
    }
}