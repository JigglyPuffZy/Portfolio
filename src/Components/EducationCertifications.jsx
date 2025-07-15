import { FaBookOpen, FaMedal, FaUserGraduate, FaCertificate, FaStar } from 'react-icons/fa';

const educations = [
  {
    icon: <FaBookOpen className="w-7 h-7 text-blue-400" />, 
    school: 'University of Saint Louis Tuguegarao',
    degree: 'Bachelor of Science in Information Technology',
    years: '2020–2024',
    desc: '',
    border: 'from-blue-700 to-blue-500',
  },
  {
    icon: <FaMedal className="w-7 h-7 text-blue-400" />,
    school: 'Sto. Tomas National High School',
    degree: 'Humanities and Social Sciences',
    years: '2014–2020',
    desc: '',
    border: 'from-blue-700 to-blue-500',
  },
];

const certificates = [
  {
    icon: <FaUserGraduate className="w-7 h-7 text-green-400" />,
    title: 'NC II – Computer System Servicing',
    org: '',
    year: '2023',
    border: 'border-green-400',
    iconBg: 'bg-[#0a1627] border-4 border-green-400',
  },
  {
    icon: <FaCertificate className="w-7 h-7 text-yellow-400" />,
    title: 'Certificate of Appreciation – PSITE',
    org: '4th ICITE',
    year: '2023',
    border: 'border-yellow-400',
    iconBg: 'bg-[#0a1627] border-4 border-yellow-400',
  },
  {
    icon: <FaStar className="w-7 h-7 text-purple-400" />,
    title: 'Gawad San Luis Awardee',
    org: 'Innovation, Creativity & Agility',
    year: '2024',
    border: 'border-purple-400',
    iconBg: 'bg-[#0a1627] border-4 border-purple-400',
    badge: 'Top',
  },
];

const EducationCertifications = () => (
  <section className="w-full py-16 px-2 sm:px-4 bg-[#0a1627] min-h-[80vh] flex items-center justify-center">
    <div className="max-w-5xl w-full mx-auto rounded-2xl bg-[#101c33] p-6 sm:p-10 shadow-2xl border border-blue-900/40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <FaBookOpen className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-blue-200">Education</h2>
          </div>
          <div className="flex flex-col gap-6">
            {educations.map((edu, idx) => (
              <div key={idx} className={`relative bg-gradient-to-br ${edu.border} p-1 rounded-2xl`}>
                <div className="flex items-center gap-4 bg-[#17213a] rounded-2xl p-5">
                  <div className="flex-shrink-0">{edu.icon}</div>
                  <div>
                    <div className="text-white font-bold text-lg leading-tight">{edu.school}</div>
                    <div className="text-blue-200 text-sm font-medium mb-1">{edu.degree}</div>
                    <div className="text-blue-400 text-xs font-medium">{edu.years}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Certificates */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <FaCertificate className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-blue-200">Certificates</h2>
          </div>
          <div className="flex flex-col gap-6">
            {certificates.map((cert, idx) => (
              <div key={idx} className={`relative bg-[#17213a] rounded-2xl p-5 border ${cert.border} flex flex-col items-center justify-center min-h-[110px]`}> 
                {/* Floating Icon */}
                <div className={`absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${cert.iconBg}`}>{cert.icon}</div>
                <div className="mt-8 w-full flex flex-col items-center justify-center">
                  <div className="text-white font-bold text-base text-center flex items-center gap-2">
                    {cert.title}
                    {cert.badge && <span className="ml-2 px-2 py-0.5 rounded-full bg-yellow-400 text-xs font-bold text-[#0a1627]">Top</span>}
                  </div>
                  {cert.org && <div className="text-blue-200 text-xs text-center mt-1">{cert.org}</div>}
                  <div className="text-blue-400 text-sm font-medium mt-1">{cert.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationCertifications; 