using LetMeBook.Models;
using System.Collections.Generic;

namespace LetMeBook.Data
{
    public static class DoctorData
    {
        public static List<Doctor> Doctors => allDoctors;
            static List<Doctor> allDoctors = new List<Doctor>()
            {
                new Doctor()
                {
                    Doctor_ID = 1,
                    Doctor_Name = "KushKumar",
                    Doctor_Experience = 5,
                    Doctor_Speciality = "Neuro-surgen"


                },
                new Doctor()
                {
                    Doctor_ID = 2,
                    Doctor_Name = "Tapasvi",
                    Doctor_Experience = 2,
                    Doctor_Speciality = "Dentist"


                },
                new Doctor()
                {
                    Doctor_ID = 3,
                    Doctor_Name = "Dhruv",
                    Doctor_Experience = 5,
                    Doctor_Speciality = "Cardiologist"


                },
                new Doctor()
                {
                    Doctor_ID = 4,
                    Doctor_Name = "Harleen",
                    Doctor_Experience = 4,
                    Doctor_Speciality = "Gynecologist"


                }

            };
    }
}
