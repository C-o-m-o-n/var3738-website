'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface RegistrationFormProps {
  wardName: string;
  onClose: () => void;
}

export default function RegistrationForm({ wardName, onClose }: RegistrationFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    ward: wardName,
    isYouthChampion: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setStep(1);
      setFormData({
        fullName: '',
        phoneNumber: '',
        ward: wardName,
        isYouthChampion: false,
      });
    }, 2000);
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        className="bg-background stamp-card max-w-md w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header */}
              <div className="mb-6 pb-6 border-b-4 border-foreground">
                <h2 className="text-2xl font-black mb-2">Register for {wardName}</h2>
                <p className="text-sm text-muted-foreground">Step {step} of 3</p>
              </div>

              {/* Step 1: Basic Info */}
              {step === 1 && (
                <motion.div
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-4 mb-6"
                >
                  <div>
                    <label className="block text-sm font-bold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border-4 border-foreground bg-background text-foreground placeholder-muted-foreground font-bold"
                      required
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <motion.div
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-4 mb-6"
                >
                  <div>
                    <label className="block text-sm font-bold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+254 XXX XXX XXX"
                      className="w-full px-4 py-3 border-4 border-foreground bg-background text-foreground placeholder-muted-foreground font-bold"
                      required
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Additional Info */}
              {step === 3 && (
                <motion.div
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-4 mb-6"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="champion"
                      name="isYouthChampion"
                      checked={formData.isYouthChampion}
                      onChange={handleInputChange}
                      className="w-6 h-6 border-4 border-foreground cursor-pointer"
                    />
                    <label htmlFor="champion" className="font-bold cursor-pointer">
                      I want to be a Youth Champion
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Champions help lead townhall discussions and mobilize their communities.
                  </p>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-6 border-t-4 border-foreground">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 px-4 py-3 font-bold border-4 border-foreground bg-muted text-foreground hover:bg-muted/80 transition-colors"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={
                      (step === 1 && !formData.fullName) ||
                      (step === 2 && !formData.phoneNumber)
                    }
                    className="flex-1 stamp-button disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 stamp-button"
                  >
                    Register
                  </button>
                )}
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="mb-4"
              >
                <CheckCircle size={64} className="mx-auto text-primary" />
              </motion.div>
              <h3 className="text-2xl font-black mb-2">Success!</h3>
              <p className="text-sm text-muted-foreground">
                You're registered for {wardName}. See you at the townhall!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
