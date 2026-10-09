namespace HospitalSystem.Models
{
    public class Appointment
    {
        public int Id { get; set; }

        public string PatientName { get; set; } = string.Empty;

        public DateTime Date { get; set; }

        public TimeSpan Time { get; set; }

        public int DoctorId { get; set; }

        [ForeignKey(nameof(DoctorId))]
        public Doctor? Doctor { get; set; }
    }
}

