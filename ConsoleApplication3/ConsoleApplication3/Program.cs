using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace ConsoleApplication3
{
    public class sample
    {
        public float Halo;
        public float Starcraft;
        public float CallofDuty2;
        public float CallofDuty3;
    }
    class Program
    {
        static async void CalcPrice(JObject o2, int i, int num)
        {
            var price = 300;

            if (Convert.ToInt32(o2["Seat" + i][0]["flag"]) == 0)
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



                var clicks = Convert.ToInt32(o2["Seat" + i][0]["clicks"]);
                Console.WriteLine("{0}",clicks);
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
                Console.WriteLine("{0}",price);
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
                //if (num == Convert.ToInt32(o2["Seat" + i][0]["no.ofseats"]))
                    price = Convert.ToInt32(o2["Seat" + i][0]["price"]);
                Console.WriteLine("{0}",price);
            }


        }

        static void Main(string[] args)
        {

            int i = 1;
            int num = 2;
            JObject o2 = new JObject();
            JObject o1 = JObject.Parse(File.ReadAllText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json"));
            // read JSON directly from a file
            using (StreamReader file = File.OpenText(@"d:\users\h224169\documents\visual studio 2015\Projects\ConsoleApplication2\ConsoleApplication2\sample.json"))
            using (JsonTextReader reader = new JsonTextReader(file))
            {

                o2 = (JObject)JToken.ReadFrom(reader);
                if (Convert.ToString(o2["Seat" + i][0]["blocked"]) == "true")
                {
                    Console.WriteLine("SEAT IS BOOKED");
                    goto Booked;
                }
                var s = o2["Seat" + i][0]["clicks"];

                var w = Convert.ToInt32(s);
                w += 1;
                o2["Seat" + i][0]["no.ofseats"] = num;

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
            CalcPrice (o2, i, num);
            goto Finish;

            Booked:
            Console.WriteLine("exit now");
            Finish:
            Console.ReadLine();
        }
    }
}
