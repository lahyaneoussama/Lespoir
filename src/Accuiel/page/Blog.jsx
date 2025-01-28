import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './css/Blog.css';

export default function Blog() {
  const reviews = [
    {
      name: 'Lahyane Oussama',
      stars: 5,
      text: "Une école d'excellence qui place l'innovation, la qualité et le développement personnel au cœur de son enseignement.",
      avatar: './images/p1.jpg',
    },
    {
      name: 'Nihad Zafati',
      stars: 4,
      text: 'Une école incroyable qui se concentre sur lapprentissage pratique et le développement personnel.',
      avatar: 'https://via.placeholder.com/55',
    },
    {
      name: 'Karim Benali',
      stars: 5,
      text: 'Une institution qui valorise la créativité et le progrès académique.',
      avatar: 'https://via.placeholder.com/55',
    },
    {
      name: 'Amina Khalid',
      stars: 4,
      text: 'Un excellent environnement pour que les enfants grandissent et apprennent.',
      avatar: 'https://via.placeholder.com/55',
    },
  ];

  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 3) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 3 + reviews.length) % reviews.length);
  };

  const nextIndex1 = (index + 1) % reviews.length;
  const nextIndex2 = (index + 2) % reviews.length;

  return (
    <div className="container_Blog">
      <h2 className="title">AVIS DES PARENTS</h2>

      <div className="reviews-container">
        <button onClick={prevReview} className="button">
          ❮ Précédent
        </button>

        <div className="reviews-container">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="review"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={reviews[index].avatar}
                alt="Avatar"
                className="avatar"
              />
              <div className="ml-4">
                <p className="name">{reviews[index].name}</p>
                <div className="stars">
                  {'★'.repeat(reviews[index].stars)}
                </div>
              </div>
            </div>
            <p className="text">{reviews[index].text}</p>
          </motion.div>

          <motion.div
            key={nextIndex1}
            initial={{ opacity: 0, scale: 1, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: -20 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4 }}
            className="review"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={reviews[nextIndex1].avatar}
                alt="Avatar"
                className="avatar"
              />
              <div className="ml-4">
                <p className="name">{reviews[nextIndex1].name}</p>
                <div className="stars">
                  {'★'.repeat(reviews[nextIndex1].stars)}
                </div>
              </div>
            </div>
            <p className="text">{reviews[nextIndex1].text}</p>
          </motion.div>

          <motion.div
            key={nextIndex2}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="review"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={reviews[nextIndex2].avatar}
                alt="Avatar"
                className="avatar"
              />
              <div className="ml-4">
                <p className="name">{reviews[nextIndex2].name}</p>
                <div className="stars">
                  {'★'.repeat(reviews[nextIndex2].stars)}
                </div>
              </div>
            </div>
            <p className="text">{reviews[nextIndex2].text}</p>
          </motion.div>
        </div>

        <button onClick={nextReview} className="button">
          Suivant❯
        </button>
      </div>
    </div>
  );
}
