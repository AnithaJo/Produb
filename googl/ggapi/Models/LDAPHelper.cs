using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ggapi.Models
{
    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string EID { get; set; }
        public string Phone { get; set; }
        public string MiddleName { get; set; }
        public string Region { get; set; }
    }

    /// <summary>
    /// User's properties
    /// </summary>
    public class UserPartial
    {
        public string DisplayName { get; set; }
        public string EID { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Region { get; set; }
    }


    /// <summary>
    /// User partial comparer class
    /// </summary>
    public class UserPartialComparer : IEqualityComparer<UserPartial>
    {
        private Func<UserPartial, object> _funcUserDistinct;

        /// <summary>
        /// Initializes a new instance of the <see cref="UserPartialComparer"/> class.
        /// </summary>
        /// <param name="_funcUserDistinct">The _func user distinct.</param>
        public UserPartialComparer(Func<UserPartial, object> _funcUserDistinct)
        {
            this._funcUserDistinct = _funcUserDistinct;
        }

        /// <summary>
        /// Equalses the specified user1.
        /// </summary>
        /// <param name="user1">The user1.</param>
        /// <param name="user2">The user2.</param>
        /// <returns>distinct user</returns>
        public bool Equals(UserPartial user1, UserPartial user2)
        {
            return _funcUserDistinct(user1).Equals(_funcUserDistinct(user2));
        }

        /// <summary>
        /// Returns a hash code for this instance.
        /// </summary>
        /// <param name="obj">The object.</param>
        /// <returns>
        /// A hash code for this instance, suitable for use in hashing algorithms and data structures like a hash table. 
        /// <returns>distinct user</returns>
        public int GetHashCode(UserPartial obj)
        {
            return this._funcUserDistinct(obj).GetHashCode();
        }


    }

}