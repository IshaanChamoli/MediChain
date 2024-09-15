import React, { useState } from 'react';
import './App.css';

type Note = {
  id: number;
  name: string;
  allergies: string;
  chronicConditions: string;
  surgeries: string;
  currentMedications: string;
  allDetails: string;
};

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      name: 'Linda I Smith',
      allergies: 'Peanuts Penicillin Latex',
      chronicConditions: 'Asthma Diabetes',
      surgeries: 'Appendectomy Appendectomy Gastric bypass',
      currentMedications: 'Lisinopril, 55mg, Thrice daily',
      allDetails: `{
        'patientID': 'unique-patient-id-1',
        'name': {'first': 'Linda', 'last': 'Smith', 'middle': 'I'},
        'dateOfBirth': '2004-01-16',
        'gender': 'Male',
        'contactInformation': {
          'email': 'ginamendoza@example.net',
          'phone': '816.849.6514x07347',
          'address': {'street': '62409 Mcconnell Overpass', 'city': 'Debraville', 'state': 'DE', 'zipCode': '43535'}
        },
        'emergencyContact': {
          'name': 'Tina Miller',
          'relationship': 'Spouse',
          'phone': '(282)762-4851',
          'email': 'wardbonnie@example.com'
        },
        'medicalHistory': {
          'allergies': ['Peanuts', 'Penicillin', 'Latex'],
          'chronicConditions': ['Asthma', 'Diabetes'],
          'surgeries': [
            {'type': 'Appendectomy', 'date': '2024-09-10'},
            {'type': 'Appendectomy', 'date': '2013-12-02'},
            {'type': 'Gastric bypass', 'date': '2024-08-30'}
          ],
          'familyMedicalHistory': {'father': ['Diabetes'], 'mother': ['Thyroid']},
          'pastHospitalizations': [{'reason': 'Fracture', 'date': '2022-12-27', 'duration': '6 days'}]
        },
        'currentMedications': [{'medicationName': 'Lisinopril', 'dosage': '55mg', 'frequency': 'Thrice daily'}],
        'insuranceDetails': {
          'provider': 'Coleman-Jacobs',
          'policyNumber': 'H6525866568',
          'coverageLimit': '$148055',
          'coPay': '$45'
        },
        'primaryPhysician': {'name': 'Dr. Shawn Wiggins', 'contact': '534.362.2628', 'email': 'vdaniel@example.net'},
        'visitRecords': [{'visitID': 'visit-110', 'date': '2024-06-06', 'reason': 'Follow-up', 'doctor': 'Dr. Amber Klein', 'hospital': 'Hospital 34', 'diagnosis': 'Improving'}],
        'laboratoryResults': [{'testName': 'Complete Blood Count (CBC)', 'result': {'WBC': '6.8', 'RBC': '5.7', 'Hemoglobin': '12.8'}, 'date': '2023-10-13'}]
      }`
    },
    {
      id: 2,
      name: 'Bradley I Gonzalez',
      allergies: 'Penicillin Pollen Latex',
      chronicConditions: 'Diabetes Asthma Hypertension',
      surgeries: 'Cataract Surgery',
      currentMedications: '',
      allDetails: `{
        'patientID': 'unique-patient-id-2',
        'name': {'first': 'Bradley', 'last': 'Gonzalez', 'middle': 'I'},
        'dateOfBirth': '1961-03-06',
        'gender': 'Male',
        'contactInformation': {
          'email': 'cheryl21@example.org',
          'phone': '655-275-2465x62599',
          'address': {'street': '4423 Craig Terrace', 'city': 'Phillipsfort', 'state': 'TN', 'zipCode': '88201'}
        },
        'emergencyContact': {
          'name': 'Phillip Murphy',
          'relationship': 'Spouse',
          'phone': '+1-505-508-3969x089',
          'email': 'longbrandon@example.net'
        },
        'medicalHistory': {
          'allergies': ['Penicillin', 'Pollen', 'Latex'],
          'chronicConditions': ['Diabetes', 'Asthma', 'Hypertension'],
          'surgeries': [{'type': 'Cataract Surgery', 'date': '2022-02-20'}],
          'familyMedicalHistory': {'father': ['Heart Disease'], 'mother': ['Cancer', 'Hypertension']},
          'pastHospitalizations': [{'reason': 'Fracture', 'date': '2016-09-25', 'duration': '3 days'}]
        },
        'currentMedications': [],
        'insuranceDetails': {
          'provider': 'Williams Group',
          'policyNumber': 'H3051631793',
          'coverageLimit': '$453666',
          'coPay': '$25'
        },
        'primaryPhysician': {'name': 'Dr. Amy Weber', 'contact': '001-858-776-6508x8677', 'email': 'hernandezpatricia@example.org'},
        'visitRecords': [{'visitID': 'visit-690', 'date': '2024-01-24', 'reason': 'Follow-up', 'doctor': 'Dr. Amy Weber', 'hospital': 'Hospital 24', 'diagnosis': 'Stable condition'}],
        'laboratoryResults': [{'testName': 'Complete Blood Count (CBC)', 'result': {'WBC': '9.7', 'RBC': '4.6', 'Hemoglobin': '12.9'}, 'date': '2024-09-01'}]
      }`
    },
    {
      id: 3,
      name: 'Elizabeth T Miller',
      allergies: 'Shellfish Pollen',
      chronicConditions: 'Asthma Diabetes',
      surgeries: 'Cataract Surgery',
      currentMedications: '',
      allDetails: `{
        'patientID': 'unique-patient-id-3',
        'name': {'first': 'Elizabeth', 'last': 'Miller', 'middle': 'T'},
        'dateOfBirth': '1969-01-25',
        'gender': 'Male',
        'contactInformation': {
          'email': 'adamsjennifer@example.com',
          'phone': '639-502-9816',
          'address': {'street': '2935 Kelsey Crest', 'city': 'North Johnborough', 'state': 'OR', 'zipCode': '66675'}
        },
        'emergencyContact': {
          'name': 'James Jimenez',
          'relationship': 'Friend',
          'phone': '001-761-973-5046',
          'email': 'zwilliams@example.net'
        },
        'medicalHistory': {
          'allergies': ['Shellfish', 'Pollen'],
          'chronicConditions': ['Asthma', 'Diabetes'],
          'surgeries': [{'type': 'Cataract Surgery', 'date': '2005-01-20'}],
          'familyMedicalHistory': {'father': ['Diabetes'], 'mother': ['Hypertension']},
          'pastHospitalizations': [{'reason': 'Pneumonia', 'date': '2015-10-21', 'duration': '1 days'}]
        },
        'currentMedications': [],
        'insuranceDetails': {
          'provider': 'Preston-Matthews',
          'policyNumber': 'H6666522673',
          'coverageLimit': '$136865',
          'coPay': '$16'
        },
        'primaryPhysician': {'name': 'Dr. Lisa Sanchez', 'contact': '+1-807-352-3581x739', 'email': 'meganjames@example.net'},
        'visitRecords': [{'visitID': 'visit-670', 'date': '2024-01-01', 'reason': 'Consultation', 'doctor': 'Dr. Brian Mccoy', 'hospital': 'Hospital 17', 'diagnosis': 'Needs further tests'}],
        'laboratoryResults': [{'testName': 'Lipid Panel', 'result': {'WBC': '5.8', 'RBC': '4.1', 'Hemoglobin': '16.5'}, 'date': '2024-06-29'}]
      }`
    },
    {
      id: 4,
      name: 'Trevor Q Ross',
      allergies: 'Peanuts',
      chronicConditions: 'Diabetes Asthma',
      surgeries: 'Appendectomy',
      currentMedications: '',
      allDetails: `{
        'patientID': 'unique-patient-id-4',
        'name': {'first': 'Trevor', 'last': 'Ross', 'middle': 'Q'},
        'dateOfBirth': '1989-06-22',
        'gender': 'Female',
        'contactInformation': {
          'email': 'waltonmichael@example.com',
          'phone': '(333)289-0080x2910',
          'address': {'street': '776 Cynthia Bridge', 'city': 'New Rebekah', 'state': 'AZ', 'zipCode': '29514'}
        },
        'emergencyContact': {
          'name': 'Jamie Bradley',
          'relationship': 'Sibling',
          'phone': '+1-624-388-2225x750',
          'email': 'rossjacob@example.com'
        },
        'medicalHistory': {
          'allergies': ['Peanuts'],
          'chronicConditions': ['Diabetes', 'Asthma'],
          'surgeries': [{'type': 'Appendectomy', 'date': '2021-11-09'}],
          'familyMedicalHistory': {'father': ['Diabetes', 'Heart Disease'], 'mother': []},
          'pastHospitalizations': [{'reason': 'Fracture', 'date': '2020-10-21', 'duration': '10 days'}]
        },
        'currentMedications': [],
        'insuranceDetails': {
          'provider': 'Schultz and Sons',
          'policyNumber': 'H3821903788',
          'coverageLimit': '$250051',
          'coPay': '$46'
        },
        'primaryPhysician': {'name': 'Dr. Tyler Hernandez', 'contact': '766.348.7072x4925', 'email': 'slong@example.net'},
        'visitRecords': [{'visitID': 'visit-756', 'date': '2024-01-17', 'reason': 'Routine check-up', 'doctor': 'Dr. Billy Gonzalez', 'hospital': 'Hospital 13', 'diagnosis': 'Stable condition'}],
        'laboratoryResults': [{'testName': 'Lipid Panel', 'result': {'WBC': '10.0', 'RBC': '4.6', 'Hemoglobin': '16.9'}, 'date': '2024-06-26'}]
      }`
    },
    {
      id: 5,
      name: 'Loretta K James',
      allergies: 'Latex Peanuts',
      chronicConditions: 'Diabetes',
      surgeries: 'Knee Replacement',
      currentMedications: '',
      allDetails: `{
        'patientID': 'unique-patient-id-5',
        'name': {'first': 'Loretta', 'last': 'James', 'middle': 'K'},
        'dateOfBirth': '1985-10-07',
        'gender': 'Female',
        'contactInformation': {
          'email': 'shericook@example.com',
          'phone': '001-739-602-7600x57779',
          'address': {'street': '034 Hines View Suite 426', 'city': 'Castrofurt', 'state': 'GU', 'zipCode': '72548'}
        },
        'emergencyContact': {
          'name': 'Juan Frazier',
          'relationship': 'Friend',
          'phone': '(900)436-8371x664',
          'email': 'harmonjeffrey@example.com'
        },
        'medicalHistory': {
          'allergies': ['Latex', 'Peanuts'],
          'chronicConditions': ['Diabetes'],
          'surgeries': [{'type': 'Knee Replacement', 'date': '2019-12-31'}],
          'familyMedicalHistory': {'father': ['Heart Disease'], 'mother': []},
          'pastHospitalizations': [{'reason': 'Fracture', 'date': '2016-11-24', 'duration': '7 days'}]
        },
        'currentMedications': [],
        'insuranceDetails': {
          'provider': 'Mullins Inc',
          'policyNumber': 'H6293287363',
          'coverageLimit': '$397236',
          'coPay': '$40'
        },
        'primaryPhysician': {'name': 'Dr. Brandon Reese', 'contact': '654-734-8720', 'email': 'mitchellsweeney@example.net'},
        'visitRecords': [{'visitID': 'visit-877', 'date': '2024-01-09', 'reason': 'Routine check-up', 'doctor': 'Dr. Steven Williams', 'hospital': 'Hospital 13', 'diagnosis': 'Improving'}],
        'laboratoryResults': [{'testName': 'Complete Blood Count (CBC)', 'result': {'WBC': '9.7', 'RBC': '5.1', 'Hemoglobin': '16.9'}, 'date': '2024-03-30'}]
      }`
    }
  ]);

  const [name, setName] = useState("");
  const [allergies, setAllergies] = useState("");
  const [chronicConditions, setChronicConditions] = useState("");
  const [surgeries, setSurgeries] = useState("");
  const [currentMedications, setCurrentMedications] = useState("");
  const [allDetails, setAllDetails] = useState("");
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setName(note.name);
    setAllergies(note.allergies);
    setChronicConditions(note.chronicConditions);
    setSurgeries(note.surgeries);
    setCurrentMedications(note.currentMedications);
    setAllDetails(note.allDetails);
  };

  const handleAddNote = (event: React.FormEvent) => {
    event.preventDefault();
    const newNote: Note = {
      id: notes.length + 1,
      name: name,
      allergies: allergies,
      chronicConditions: chronicConditions,
      surgeries: surgeries,
      currentMedications: currentMedications,
      allDetails: allDetails
    };

    setNotes([newNote, ...notes]);
    clearForm();
  };

  const handleUpdateNote = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedNote) {
      return;
    }

    const updatedNote: Note = {
      id: selectedNote.id,
      name: name,
      allergies: allergies,
      chronicConditions: chronicConditions,
      surgeries: surgeries,
      currentMedications: currentMedications,
      allDetails: allDetails
    };

    const updatedNotesList = notes.map((note) =>
      note.id === selectedNote.id ? updatedNote : note
    );
    setNotes(updatedNotesList);
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setAllergies("");
    setChronicConditions("");
    setSurgeries("");
    setCurrentMedications("");
    setAllDetails("");
    setSelectedNote(null);
  };

  const handleCancel = () => {
    clearForm();
  };

  const deleteNote = (event: React.MouseEvent, noteId: number) => {
    event.stopPropagation();
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleCopyToClipboard = (event: React.MouseEvent, allDetails: string) => {
    event.stopPropagation();
    navigator.clipboard.writeText(allDetails).then(() => {
      alert('Copied to clipboard!');
    });
  };

  const filteredNotes = notes.filter((note) =>
    note.id.toString().includes(searchQuery)
  );

  return (
    <div className="app-wrapper bg-red-900 h-screen flex flex-col">
  
      {/* Search bar section */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-4">
        <input
          className="w-full p-3 bg-gray-700 text-gray-300 placeholder-gray-500 rounded-lg border border-transparent focus:border-blue-500 focus:outline-none transition-colors"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by ID"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md">
          Search
        </button>
      </div>
  
      {/* Main content area with no space between */}
      <div className="app-container bg-gray-900 flex-1 p-8 overflow-y-auto">
        <form
          className="note-form bg-gray-800 p-6 rounded-lg shadow-lg space-y-6 flex flex-col"
          onSubmit={(event) =>
            selectedNote ? handleUpdateNote(event) : handleAddNote(event)
          }
        >
          <input
            className="w-full p-3 bg-gray-700 text-gray-300 placeholder-gray-500 rounded-lg border border-transparent focus:border-blue-500 focus:outline-none transition-colors"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            required
          />
          <input
            className="w-full p-3 bg-gray-700 text-gray-300 placeholder-gray-500 rounded-lg border border-transparent focus:border-blue-500 focus:outline-none transition-colors"
            value={allergies}
            onChange={(event) => setAllergies(event.target.value)}
            placeholder="Allergies"
            required
          />
          <input
            className="w-full p-3 bg-gray-700 text-gray-300 placeholder-gray-500 rounded-lg border border-transparent focus:border-blue-500 focus:outline-none transition-colors"
            value={chronicConditions}
            onChange={(event) => setChronicConditions(event.target.value)}
            placeholder="Chronic Conditions"
            required
          />
          <input
            className="w-full p-3 bg-gray-700 text-gray-300 placeholder-gray-500 rounded-lg border border-transparent focus:border-blue-500 focus:outline-none transition-colors"
            value={surgeries}
            onChange={(event) => setSurgeries(event.target.value)}
            placeholder="Surgeries"
            required
          />
          <input
            className="w-full p-3 bg-gray-700 text-gray-300 placeholder-gray-500 rounded-lg border border-transparent focus:border-blue-500 focus:outline-none transition-colors"
            value={currentMedications}
            onChange={(event) => setCurrentMedications(event.target.value)}
            placeholder="Current Medication"
            required
          />
  
          {selectedNote ? (
            <div className="edit-buttons flex space-x-3">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md"
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-lg shadow-lg"
            >
              Add Note
            </button>
          )}
        </form>
  
        <div className="notes-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mt-8 flex-grow">
          {filteredNotes.map((note) => (
            <div
              className="note-item bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer relative h-[300px] overflow-hidden"
              onClick={() => handleNoteClick(note)}
              key={note.id}
            >
              <div className="notes-header flex justify-between">
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={(event) => deleteNote(event, note.id)}
                >
                  x
                </button>
                <button
                  className="text-blue-500 hover:text-blue-600"
                  onClick={(event) => handleCopyToClipboard(event, note.allDetails)}
                >
                  Copy
                </button>
              </div>
              <h2 className="text-xl font-bold text-blue-400">{note.name}</h2>
              <p className="text-darkgrey mt-2">Allergies: {note.allergies}</p>
              <p className="text-darkgrey mt-2">Chronic Conditions: {note.chronicConditions}</p>
              <p className="text-darkgrey mt-2">Surgeries: {note.surgeries}</p>
              <p className="text-darkgrey mt-2">Medication: {note.currentMedications}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
