using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace apiexample.Controllers
{
    public class HelloController : ApiController
    {
        public class Revert {
            public string name { get; set; }
            public int phone { get; set; }
            

          }
        
        [HttpPost, HttpOptions]
        public List<Revert> GetHeros([FromBody] string name)
        {
            Revert r = new Revert();
            var i = 0;
            r.name = name;
            r.phone = i;
           
            
            var hero = new List<Revert>();
          
            hero.Add(r);
            i++;
            return hero;
            
        }

        [HttpGet]
        public List<string> NewHeros()
        {


            var heros = new List<string>();
            heros.Add("ironman"); heros.Add("ironman");
            heros.Add("ironman");
           

            return heros;
        }

    }
}
