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
    public class FinalTryController : ApiController
    {
        private UOP_YES1QEntities1 db = new UOP_YES1QEntities1();
        private ExperimentEntities111 db1 = new ExperimentEntities111();
        [HttpGet]
        public string GetTry()
        {
            var str ="";
            var count = 0;
            List<UserPartial> lstUsers;
            string sql = "select distinct ESTIMATED_BY_ID from YES_ESTIMATE_COMMON where estimated_by_id like '[EH]%' ;  ";
            DbRawSqlQuery<string> data = db.Database.SqlQuery<string>(sql);
            var region = data.Cast<string>().ToArray();
            foreach (var cus in region)
            {
                lstUsers = LDAPController.GetMatchingUserAndADGroup(cus);
                if (lstUsers.Count != 0)
                {
                    str = lstUsers[0].Region;
                    var str1 = str.Split('/');
                    str = str1[1];
                    db1.USER_REGIONS_SP(cus,str);
                    db1.SaveChanges();
                    count++;
                }
            }

            
            List<string> reg = new List<string>();

            return str;
        }


        [HttpPost, HttpOptions]
        public string[] GetPost([FromBody] string name)
        {
            string[] hear = new string[2];
            hear[0] = name;
            hear[1] = "saurav";
            return hear;
        }
    }
}

