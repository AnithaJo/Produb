export  class serial {
   public id: number;
}
export class hey {
    Id: number;
    Name: string;
   
}
export class detail {
    selected_tech: string;
    selected_region: string;
    selected_operation: string;
    Average_Time: number;
    sau: hey[];
}
export class detail1 {
    selected_tech: string;
    selected_region: string;
    Average_Time: number;
}
export class Report_Parameters {
    tech: string;
    time: number;
    status: string;
}
export class Report_Parameters1 {
    tech: string;
    time1: Date;
    time2: Date;
    status: string;
}
export class map {
    Id: number;
    lat: number;
    lng: number;
}
export class ex {
    lat: number;
    lng: number;
}
export class chartdata {
    sum1: number[];
    region: string;
}
export class SamplePerform
{
    Id: number;
    employee: number;
    tech_name: string;
    region: string;
    operation: string;
    time: number;

}
export class SampleInput {
    Region: string;
    Operation_name: string;

}
export class btn {
    count: boolean = true;
    count1: boolean = false;
    constructor() {
        this.count = true;

    }
}
export var count: boolean = true;
export var count1: boolean = false;
export var globdata: any;
//namespace UOP_GlobalGHE.Models {
//    /// <summary>
//    /// LDAP utility class to get the user information from LDAP
//    /// </summary>
//    public class LDAPUtility {
//        private static readonly string[] Columns = new string[] { "sn", "givenName", "displayName", "mail", "samaccountname", "telephoneNumber", "middleName" }; //User Properties

//        private static readonly string[] ColumnsPartial = new string[] { "displayName", "samaccountname" };
//        private static log4net.ILog _logger = log4net.LogManager.GetLogger(typeof (LDAPUtility)); //Log4net used for logging

//        /// <summary>
//        /// Gets the current LDAP path.
//        /// </summary>
//        /// <returns></returns>
//        private static string GetCurrentLdapPath()
//    {
//        DirectoryEntry entryRoot = new DirectoryEntry("LDAP://RootDSE"); //Intialized directiry entry
//        return entryRoot.Properties["defaultNamingContext"][0].ToString();
//    }

//        /// <summary>
//        /// Gets the matching user from ad group.
//        /// </summary>
//        /// <param name="matchString">The match string.</param>
//        /// <returns>Matching users</returns>
//        public static List < UserPartial > GetMatchingUserAndADGroup(string matchString)
//    {
//        List < UserPartial > matchingUsers = new List<UserPartial>();
//        string strDirectoryPath = "LDAP://" + GetCurrentLdapPath(); //Appends LDAP:// to actual directory path
//        //For two domains it searches all the users and gives the results
//        foreach(string domain in new string[] { "global", "pacrim1" })
//        {
//            strDirectoryPath = string.Format("LDAP://{0}", domain);
//            DirectoryEntry deRootDse = new DirectoryEntry(strDirectoryPath);
//            DirectorySearcher searcher = new DirectorySearcher(deRootDse);
//            searcher.Filter = string.Format("(&(|(objectcategory=group)(objectClass=user))(|(anr={0}*)(givenName={0}*)(sn={0}*)(displayName={0}*)(cn={0}*)))", matchString);
//            searcher.PropertiesToLoad.AddRange(ColumnsPartial);
//            try {
//                searcher.SizeLimit = 5;
//                SearchResultCollection result = searcher.FindAll();
//                foreach(SearchResult resEnt in result)
//                {
//                    DirectoryEntry entry = resEnt.GetDirectoryEntry();
//                    matchingUsers.Add(GetPartialUserFromEntry(entry, domain)); //Adds the matching users
//                }
//            }
//            catch (Exception ex) {
//                _logger.Error(string.Format("{0}: LDAP search error. ", MethodBase.GetCurrentMethod().Name), ex);
//                throw ex;
//            }
//        }
//        return matchingUsers; //returns matching users
//    }

//        /// <summary>
//        /// Gets the partial user from entry.
//        /// </summary>
//        /// <param name="entry">The entry.</param>
//        /// <param name="domain">The domain.</param>
//        /// <returns>User</returns>
//        private static UserPartial GetPartialUserFromEntry(DirectoryEntry entry, string domain)
//    {
//        UserPartial user = new UserPartial(); //Initilizes object for UserPartial
//        user.DisplayName = string.Format("{0} ({1})", entry.Properties["displayName"].Value != null ? entry.Properties["displayName"].Value.ToString() : string.Empty, entry.Properties["samaccountname"].Value != null ? entry.Properties["samaccountname"].Value.ToString() : string.Empty);
//        user.EID = string.Format("{0}/{1}", domain, entry.Properties["samaccountname"].Value != null ? entry.Properties["samaccountname"].Value.ToString() : string.Empty);
//        user.Email = string.Format("{0}/{1}", domain, entry.Properties["mail"].Value != null ? entry.Properties["mail"].Value.ToString() : string.Empty);
//        user.Name = string.Format("{0}/{1}", domain, entry.Properties["givenName"].Value != null ? entry.Properties["givenName"].Value.ToString() : string.Empty);
//        //If display is empty then it takes EID as display name
//        if (string.IsNullOrEmpty(user.DisplayName)) {
//            user.DisplayName = user.EID;
//        }
//        return user;
//    }
//}
//}

