using LetMeBook.Data;
using LetMeBook.Models;
using Microsoft.AspNetCore.Mvc;

namespace LetMeBook.Controllers
{
    [Route("api/[controller]")]
    public class DoctorsController : Controller
    {
        private DoctorRepository _repo;
        public DoctorsController(DoctorRepository repo)
        {
            this._repo = repo;
        }
        [HttpGet("GetDoctors")]
        public IActionResult GetDoctors()
        {
            var allDoctors = _repo.GetAllDoctors();
            return Ok(allDoctors);
        }

        [HttpGet("SingleDoctor/{id}")]
        public IActionResult GetDoctorById(int id)
        {
            var doctor = _repo.GetDoctorById(id);
            return Ok(doctor);
        }

        [HttpPost("[action]")]
        public IActionResult AddDoctor([FromBody]Doctor doctor)
        { 
            if(doctor != null)
            {
                _repo.AddDoctor(doctor);
            }
            return Ok();
        }

        [HttpPut("UpdateDoctor/{id}")]
        public IActionResult UpdateDoctor(int id, [FromBody] Doctor doctor)
        {
            _repo.UpdateDoctor(id, doctor);
            return Ok(doctor);
        }

        [HttpDelete("DeleteDoctor/{id}")]
        public IActionResult DeleteDoctor(int id)
        {
            _repo.DeleteDoctor(id);
            return Ok();
        }
    }
}
