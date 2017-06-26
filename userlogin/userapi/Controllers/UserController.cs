using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace userapi.Controllers
{
    public struct SampleUser
    {
        public string email;
        public string password;
    }
    public class UserController : ApiController
    {
        [HttpGet]
        public SampleUser[] GetHeros()
        {
            var heros = new SampleUser[3];
            heros[0].email = "tony";
            heros[0].password = "stark";
            heros[1].email = "chris";
            heros[1].password = "rogers";
            heros[2].email = "hank";
            heros[2].password = "pymm";

            return heros;
        }
    }
}
