'use client'

import { useState } from "react";
import { Info, Mail, FileText } from "lucide-react";
import { useRouter } from 'next/navigation';

interface CalculatorResults {
  femaleToilets: number;
  maleToilets: number;
  maleUrinals: number;
  accessibleToilets: number;
  handwashingFacilities: number;
  totalToilets: number;
}

export default function PortableToiletCalculator() {
  const router = useRouter();
  const [totalAttendees, setTotalAttendees] = useState("");
  const [femalePercent, setFemalePercent] = useState("50");
  const [malePercent, setMalePercent] = useState("50");
  const [disabledPercent, setDisabledPercent] = useState("5");
  const [duration, setDuration] = useState("");
  const [alcoholFood, setAlcoholFood] = useState("yes");
  const [servicingInterval, setServicingInterval] = useState("8");
  const [buffer, setBuffer] = useState("10");
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [error, setError] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);

  const calculateToilets = async () => {
    if (!totalAttendees || !duration) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      const requestData = {
        attendees: parseInt(totalAttendees),
        femalePercent: parseInt(femalePercent),
        malePercent: parseInt(malePercent),
        disabledPercent: parseInt(disabledPercent),
        duration: parseInt(duration),
        alcohol: alcoholFood === "yes",
        food: alcoholFood === "yes",
        servicingInterval: parseInt(servicingInterval),
        buffer: parseInt(buffer),
      };

      console.log('Sending calculation request:', requestData);

      const response = await fetch("/api/calculator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to calculate');
      }

      const data = await response.json();
      console.log('Received calculation results:', data);
      setResults(data);
      setError("");
    } catch (err) {
      console.error('Calculation error:', err);
      setError("Failed to calculate requirements. Please try again.");
      setResults(null);
    }
  };

  const handleGetQuote = () => {
    if (!results) return;

    const requirementsText = `Required facilities based on calculator:\n` +
      `- Female Toilets: ${results.femaleToilets}\n` +
      `- Male Toilets: ${results.maleToilets}\n` +
      `- Male Urinals: ${results.maleUrinals}\n` +
      `- Accessible Toilets: ${results.accessibleToilets}\n` +
      `- Handwashing Stations: ${results.handwashingFacilities}\n` +
      `- Total Units: ${results.totalToilets}\n\n` +
      `Event Details:\n` +
      `- Total Attendees: ${totalAttendees}\n` +
      `- Duration: ${duration} hours\n` +
      `- Alcohol/Food Service: ${alcoholFood === 'yes' ? 'Yes' : 'No'}`;

    const encodedRequirements = encodeURIComponent(requirementsText);
    router.push(`/contact?requirements=${encodedRequirements}`);
  };

  const handleEmailResults = async () => {
    if (!emailInput) {
      setEmailError("Please enter an email address");
      return;
    }

    if (!emailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch("/api/calculator/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput,
          calculationResults: {
            ...results,
            totalAttendees,
            duration,
            alcoholFood,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setEmailSuccess(true);
      setEmailError("");
      setEmailInput("");
      setShowEmailInput(false);
      setTimeout(() => setEmailSuccess(false), 3000);
    } catch (err) {
      setEmailError("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Portable Toilet Calculator</h1>
        <p className="text-lg text-gray-600">
          Calculate the recommended number of portable toilets needed for your event based on attendance, duration, and other factors.
        </p>
      </div>

      <div className="space-y-6">
        <div className="input-group">
          <label className="block mb-2">
            <span className="text-gray-700 font-medium">Total Attendees</span>
            <div className="inline-block ml-2 relative group">
              <Info className="w-4 h-4 text-gray-400" />
              <span className="hidden group-hover:block absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                Enter the total number of expected attendees
              </span>
            </div>
          </label>
          <input
            type="number"
            placeholder="Enter number"
            value={totalAttendees}
            onChange={(e) => setTotalAttendees(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            min="0"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="input-group">
            <label className="block mb-2">
              <span className="text-gray-700 font-medium">Female Attendees (%)</span>
              <div className="inline-block ml-2 relative group">
                <Info className="w-4 h-4 text-gray-400" />
                <span className="hidden group-hover:block absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                  Percentage of female attendees
                </span>
              </div>
            </label>
            <input
              type="number"
              placeholder="Enter percentage"
              value={femalePercent}
              onChange={(e) => {
                const value = Math.min(100, Math.max(0, Number(e.target.value)));
                setFemalePercent(String(value));
                setMalePercent(String(100 - value));
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              min="0"
              max="100"
            />
          </div>

          <div className="input-group">
            <label className="block mb-2">
              <span className="text-gray-700 font-medium">Male Attendees (%)</span>
              <div className="inline-block ml-2 relative group">
                <Info className="w-4 h-4 text-gray-400" />
                <span className="hidden group-hover:block absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                  Percentage of male attendees
                </span>
              </div>
            </label>
            <input
              type="number"
              placeholder="Enter percentage"
              value={malePercent}
              onChange={(e) => {
                const value = Math.min(100, Math.max(0, Number(e.target.value)));
                setMalePercent(String(value));
                setFemalePercent(String(100 - value));
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              min="0"
              max="100"
            />
          </div>
        </div>

        <div className="input-group">
          <label className="block mb-2">
            <span className="text-gray-700 font-medium">Disabled Attendees (%)</span>
            <div className="inline-block ml-2 relative group">
              <Info className="w-4 h-4 text-gray-400" />
              <span className="hidden group-hover:block absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                Percentage of attendees requiring accessible facilities
              </span>
            </div>
          </label>
          <input
            type="number"
            placeholder="Enter percentage"
            value={disabledPercent}
            onChange={(e) => setDisabledPercent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            min="0"
            max="100"
          />
        </div>

        <div className="input-group">
          <label className="block mb-2">
            <span className="text-gray-700 font-medium">Event Duration</span>
            <div className="inline-block ml-2 relative group">
              <Info className="w-4 h-4 text-gray-400" />
              <span className="hidden group-hover:block absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                Enter the total duration of your event in hours
              </span>
            </div>
          </label>
          <input
            type="number"
            placeholder="Hours"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            min="0"
          />
        </div>

        <div className="input-group">
          <label className="block mb-2">
            <span className="text-gray-700 font-medium">Alcohol/Food Service</span>
            <div className="inline-block ml-2 relative group">
              <Info className="w-4 h-4 text-gray-400" />
              <span className="hidden group-hover:block absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                Select whether alcohol or food will be served at the event
              </span>
            </div>
          </label>
          <select
            value={alcoholFood}
            onChange={(e) => setAlcoholFood(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          >
            <option value="yes">Yes, serving alcohol/food</option>
            <option value="no">No alcohol/food service</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="input-group">
            <label className="block mb-2">
              <span className="text-gray-700 font-medium">Servicing Interval (hours)</span>
              <div className="inline-block ml-2 relative group">
                <Info className="w-4 h-4 text-gray-400" />
                <span className="hidden group-hover:block absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                  How often the facilities will be serviced during the event
                </span>
              </div>
            </label>
            <input
              type="number"
              placeholder="Hours"
              value={servicingInterval}
              onChange={(e) => setServicingInterval(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              min="1"
            />
          </div>

          <div className="input-group">
            <label className="block mb-2">
              <span className="text-gray-700 font-medium">Buffer (%)</span>
              <div className="inline-block ml-2 relative group">
                <Info className="w-4 h-4 text-gray-400" />
                <span className="hidden group-hover:block absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                  Additional capacity buffer for peak usage
                </span>
              </div>
            </label>
            <input
              type="number"
              placeholder="Percentage"
              value={buffer}
              onChange={(e) => setBuffer(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              min="0"
              max="100"
            />
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        <button
          onClick={calculateToilets}
          className="w-full bg-cyan-600 text-white py-4 px-6 rounded-lg hover:bg-cyan-700 transition-colors font-medium"
        >
          Calculate Requirements
        </button>

        {results && (
          <div className="mt-8 space-y-6">
            <h2 className="text-2xl font-bold text-center">Recommended Requirements</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-cyan-600 mb-2">{results.femaleToilets}</span>
                <span className="text-sm text-gray-600">Female Toilets</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-cyan-600 mb-2">{results.maleToilets}</span>
                <span className="text-sm text-gray-600">Male Toilets</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-cyan-600 mb-2">{results.maleUrinals}</span>
                <span className="text-sm text-gray-600">Male Urinals</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-cyan-600 mb-2">{results.accessibleToilets}</span>
                <span className="text-sm text-gray-600">Accessible Toilets</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-cyan-600 mb-2">{results.handwashingFacilities}</span>
                <span className="text-sm text-gray-600">Handwashing Stations</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="block text-3xl font-bold text-cyan-600 mb-2">{results.totalToilets}</span>
                <span className="text-sm text-gray-600">Total Units</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetQuote}
                className="flex items-center justify-center gap-2 bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors font-medium"
              >
                <FileText className="w-5 h-5" />
                Get A Quote
              </button>
              <button
                onClick={() => setShowEmailInput(true)}
                className="flex items-center justify-center gap-2 bg-white text-cyan-600 py-3 px-6 rounded-lg border-2 border-cyan-600 hover:bg-cyan-50 transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                Email Results
              </button>
            </div>

            {showEmailInput && (
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 max-w-md p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button
                  onClick={handleEmailResults}
                  className="bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors font-medium"
                >
                  Send
                </button>
              </div>
            )}

            {emailError && (
              <div className="text-red-500 text-sm text-center">{emailError}</div>
            )}

            {emailSuccess && (
              <div className="text-green-500 text-sm text-center">
                Results have been sent to your email!
              </div>
            )}

            <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto">
              These calculations include servicing requirements and a buffer for peak usage periods.
              The recommendations are based on industry standards and may vary depending on specific event requirements.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
