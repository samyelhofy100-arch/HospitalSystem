using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;


namespace HospitalSystem.Migrations
{
    /// <inheritdoc />
    public partial class InsertAppointmentsData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            string[] patients =
            {
                "Ahmed Mohamed", "Mohamed Hassan", "Omar Khaled", "Youssef Ali", "Mahmoud Adel",
                "Karim Mostafa", "Amr Samir", "Tarek Mohamed", "Hassan Ahmed", "Khaled Mahmoud",
                "Ali Mostafa", "Hany Ibrahim", "Sherif Adel", "Walid Hassan", "Sameh Khaled",
                "Ehab Mohamed", "Ashraf Samir", "Mostafa Ahmed", "Islam Mahmoud", "Seif Ali",
                "Mina George", "Peter Samir", "George Nabil", "Mariam Ahmed", "Nour Hassan",
                "Aya Mohamed", "Salma Khaled", "Menna Adel", "Farah Mostafa", "Habiba Ali",
                "Heba Samir", "Dina Mohamed", "Sara Ahmed", "Malak Hassan", "Nada Khaled",
                "Mai Mahmoud", "Rana Adel", "Reem Mostafa", "Jana Ali", "Yara Ibrahim",
                "Ola Hassan", "Asmaa Mohamed", "Hala Ahmed", "Doaa Khaled", "Esraa Mahmoud",
                "Marwa Samir", "Rania Adel", "Laila Mostafa", "Nourhan Ali", "Shahd Hassan"
            };

            const int doctorsCount = 8;

            
            DateTime NextWorkingDay(DateTime d)
            {
                do { d = d.AddDays(1); }
                while (d.DayOfWeek == DayOfWeek.Friday || d.DayOfWeek == DayOfWeek.Saturday);
                return d;
            }

            var days = new List<DateTime>();
            var current = new DateTime(2026, 10, 7);
            for (int d = 0; d <= patients.Length / doctorsCount; d++)
            {
                current = NextWorkingDay(current);
                days.Add(current);
            }

            for (int i = 0; i < patients.Length; i++)
            {
                migrationBuilder.InsertData(
                    table: "Appointments",
                    columns: new[] { "PatientName", "Date", "Time", "DoctorId" },
                    values: new object[]
                    {
                        patients[i],
                        days[i / doctorsCount],                          
                        TimeSpan.FromMinutes(9 * 60 + 30 * (i % 16)),    
                        (i % doctorsCount) + 1                           
                    });
            }
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Appointments;");
        }
    }
}