//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ggapi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class YES_LOG_TIME
    {
        public string EMPLOYEE_ID { get; set; }
        public string TECHNOLOGY_CD { get; set; }
        public System.DateTime LOGGED_IN_TM { get; set; }
        public Nullable<System.DateTime> LOGGED_OUT_TM { get; set; }
    
        public virtual YES_APPLICATION_USER YES_APPLICATION_USER { get; set; }
        public virtual YES_APPLICATION_USER YES_APPLICATION_USER1 { get; set; }
        public virtual YES_APPLICATION_USER YES_APPLICATION_USER2 { get; set; }
    }
}
