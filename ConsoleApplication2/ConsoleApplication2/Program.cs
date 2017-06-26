using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace ConsoleApplication2
{
   
   
    public class sample
    {

        public float clicks { get; set; }
        public bool blocked { get; set; }
        
        public int flag { get; set; }
    }
    public class seats
    {
        public sample Seat1 = new sample();
    }
    class Program
    {
       
        static async void bar(JObject o2,int i,int num)
        {
            var price = 300;
            
         if (Convert.ToInt32( o2["Seat" + i][0]["flag"]) == 0)
            {
                var flag = Convert.ToInt32(o2["Seat" + i][0]["flag"]);
                flag = 1;
                o2["Seat" + i][0]["flag"] = flag;

                o2["Seat" + i][0]["price"] = price;

                File.WriteAllText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json", o2.ToString());

                // write JSON directly to a file
                using (StreamWriter file1 = File.CreateText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json"))
                using (JsonTextWriter writer = new JsonTextWriter(file1))
                {
                    o2.WriteTo(writer);
                }
                await Task.Delay(10000);

                JObject o1 = JObject.Parse(File.ReadAllText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json"));
                // read JSON directly from a file
                using (StreamReader file = File.OpenText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json"))
                using (JsonTextReader reader = new JsonTextReader(file))
                {

                    o2 = (JObject)JToken.ReadFrom(reader);
                }



                    var clicks=Convert.ToInt32(o2["Seat" + i][0]["clicks"]);
                if (clicks > 1)
                {
                    price = clicks * price;
                }
                if (Convert.ToInt32(o2["Seat" + i][0]["deselected"]) != 0)
                {
                    var desel = Convert.ToInt32(o2["Seat" + i][0]["deselected"]);
                    price = (price / clicks) * (clicks - desel);
                }
                o2["Seat" + i][0]["clicks"] = 0;
                o2["Seat" + i][0]["price"] = price;

                o2["Seat" + i][0]["flag"] = 0;
                o2["Seat" + i][0]["blocked"] = "true";
                File.WriteAllText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json", o2.ToString());

                // write JSON directly to a file
                using (StreamWriter file1 = File.CreateText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json"))
                using (JsonTextWriter writer = new JsonTextWriter(file1))
                {
                    o2.WriteTo(writer);
                }
                Console.WriteLine("{0}", price);
            }

         else
            {
                await Task.Delay(10000);
                JObject o1 = JObject.Parse(File.ReadAllText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json"));
                // read JSON directly from a file
                using (StreamReader file = File.OpenText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json"))
                using (JsonTextReader reader = new JsonTextReader(file))
                {

                    o2 = (JObject)JToken.ReadFrom(reader);
                }
                
                price =Convert.ToInt32( o2["Seat" + i][0]["price"]);
                Console.WriteLine("{0}", price);
            }


        }
       
        static  void Main(string[] args)
        {
         
                int i = 1;
            int num = 1;
            //            string json = @"{
            //    'CPU': 'Intel',
            //    'PSU': '500W',
            //    'Drives': [
            //      'DVD read/writer'
            //      /*(broken)*/,
            //      '500 gigabyte hard drive',
            //      '200 gigabype hard drive'
            //    ]
            //}";
            //sample s = new sample();
            //seats s1 = new seats();
            //sample seat = new sample();
            //string js = File.ReadAllText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json");

            ////Deserialize from file to object:
            //JsonConvert.PopulateObject(js, s1);
            //var a = s1.Seat1;
            //Console.WriteLine("{0}", s1.Seat1.flag);
            ////Change Value
            //s.CallofDuty = 8;

            //// serialize JSON directly to a file again
            //using (StreamWriter file = File.CreateText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json"))
            //{
            //    JsonSerializer serializer = new JsonSerializer();
            //    serializer.Serialize(file, s);
            //}



            JObject o2 = new JObject();
                JObject o1 = JObject.Parse(File.ReadAllText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json"));
            // read JSON directly from a file
            using (StreamReader file = File.OpenText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json"))
            using (JsonTextReader reader = new JsonTextReader(file))
            {

                o2 = (JObject)JToken.ReadFrom(reader);
                   
                if (Convert.ToString( o2["Seat" + i][0]["blocked"]) == "true")
                {
                    Console.WriteLine("SEAT IS BOOKED");
                    goto Booked;
                }
                var s = o2["Seat" + i][0]["clicks"];
                
                var w = Convert.ToInt32(s);
                w += 1;
               o2["Seat" + i][0]["no.ofseats"]=num;

                o2["Seat" + i][0]["clicks"] = w;
                Console.WriteLine("{0}", o2["Seat" + i][0]["clicks"]);

            }
            File.WriteAllText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json", o2.ToString());

            // write JSON directly to a file
            using (StreamWriter file1 = File.CreateText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json"))
            using (JsonTextWriter writer = new JsonTextWriter(file1))
            {
                o2.WriteTo(writer);
            }
            bar(o2,i,num);
            goto Finish;

            Booked:
            Console.WriteLine("exit now");








            //    JsonReader reader1 = o2.CreateReader();
            //    Console.WriteLine("{0}", reader1);
            //    while (reader1.Read())
            //    {

            //        if (reader1.Value != null)
            //        {
            //            Console.WriteLine("{0}", reader1.Value);
            //        }

            //    }





            //            JObject videogameRatings = new JObject(
            //    new JProperty("Halo", 9),
            //    new JProperty("Starcraft", 9),
            //    new JProperty("Call of Duty", 7.5));

            //File.WriteAllText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json", videogameRatings.ToString());

            //// write JSON directly to a file
            //using(StreamWriter file = File.CreateText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json"))
            //using(JsonTextWriter writer = new JsonTextWriter(file))
            //{
            //                    videogameRatings.WriteTo(writer);
            //                }






            //        JsonTextReader reader = new JsonTextReader(new StringReader(json));
            //        while (reader.Read())
            //            {
            //                if (reader.Value != null)
            //                  {
            //                        Console.WriteLine("Token: {0}, Value: {1}", reader.TokenType, reader.Value);
            //                    }
            //               else
            //{
            //                        Console.WriteLine("Token: {0}", reader.TokenType);
            //                    }
            //            }
            Finish:
            Console.ReadLine();
        }
    }
}
