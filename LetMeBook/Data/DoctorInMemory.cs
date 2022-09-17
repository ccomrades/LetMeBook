using LetMeBook.Models;
using System.Collections.Generic;
using System.Linq;

namespace LetMeBook.Data
{
    public class DoctorInMemory : DoctorRepository
    {
        public void AddDoctor(Doctor doctor)
        {
           DoctorData.Doctors.Add(doctor);
        }

        public void DeleteDoctor(int doctorId)
        {
            var doctor = DoctorData.Doctors.FirstOrDefault(n => n.Doctor_ID == doctorId);

            if(doctor != null)
            {
                DoctorData.Doctors.Remove(doctor);
            }
        }

        public List<Doctor> GetAllDoctors()
        {
            return DoctorData.Doctors.ToList();
        }

        public Doctor GetDoctorById(int id) => DoctorData.Doctors.FirstOrDefault(n => n.Doctor_ID == id);
        

        public void UpdateDoctor(int doctorId, Doctor doctor)
        {
            var oldDoctor = DoctorData.Doctors.FirstOrDefault(n => n.Doctor_ID == doctorId);
            if (oldDoctor != null)
            {
                oldDoctor.Doctor_Name = doctor.Doctor_Name;
                oldDoctor.Doctor_Experience = doctor.Doctor_Experience;
                oldDoctor.Doctor_Speciality = doctor.Doctor_Speciality;
            }
        }
    }
}
