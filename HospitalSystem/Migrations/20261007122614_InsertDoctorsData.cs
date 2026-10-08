using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HospitalSystem.Migrations
{
    /// <inheritdoc />
    public partial class InsertDoctorsData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
                  INSERT INTO Doctors (Name, Specialization, ImageUrl) VALUES
                                        ('Dr. Ahmed Ali', 'Cardiology', '1.jpg'),
                                        ('Dr. Mohamed Hassan', 'Neurology', '2.jpg'),
                                        ('Dr. Omar Khaled', 'Orthopedics', '3.jpg'),
                                        ('Dr. Youssef Ibrahim', 'Pediatrics', '4.jpg'),
                                        ('Dr. Mahmoud Adel', 'Dermatology', '5.jpg'),
                                        ('Dr. Karim Mostafa', 'Cardiology', '6.jpg'),
                                        ('Dr. Amr Samir', 'Neurology', '7.jpg'),
                                        ('Dr. Tarek Mohamed', 'Orthopedics', '8.jpg');"
                                   );

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Doctors;");
        }
    }
}
