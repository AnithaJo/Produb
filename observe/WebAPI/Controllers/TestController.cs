using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPI.Controllers
{
    public class TestController : ApiController
    {
        [HttpOptions, HttpGet,ActionName("SampleData")]
        public string SampleData()
        {
            return "dsasad";
        }
    }
}
