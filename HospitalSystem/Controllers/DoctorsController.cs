using HospitalSystem.Data;
using Microsoft.AspNetCore.Mvc;

namespace HospitalSystem.Controllers
{
    public class DoctorsController : Controller
    {
        private readonly HospitalSystemDbContext _context =
            new HospitalSystemDbContext();

        public IActionResult Index(int page = 1)
        {
            int pageSize = 4;

            var totalDoctors = _context.Doctors.Count();

            var doctors = _context.Doctors
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            ViewBag.CurrentPage = page;
            ViewBag.TotalPages = (int)Math.Ceiling(
                totalDoctors / (double)pageSize
            );

            return View(doctors);
        }
    }
}