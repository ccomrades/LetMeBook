using LetMeBook.Models;
using System.Collections.Generic;

namespace LetMeBook.Data
{
    public interface DoctorRepository
    {
        List<Doctor> GetAllDoctors();
        Doctor GetDoctorById(int id);
        void UpdateDoctor(int doctorId, Doctor doctor);
        void DeleteDoctor(int doctorId);
        void AddDoctor(Doctor doctor);
    }
}
