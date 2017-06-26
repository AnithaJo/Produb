using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ap.Controllers
{
    public class HeroController : ApiController
    {
        [HttpGet]
        public List<string> GetHeros()
        {
            var heros = new List<string>();
            heros.Add("ironman"); heros.Add("ironman");
            heros.Add("ironman");


            return heros;
        }
    }
}
