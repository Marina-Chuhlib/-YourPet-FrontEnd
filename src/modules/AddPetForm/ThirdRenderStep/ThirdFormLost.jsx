import css from './thirdStep.module.css';

import PlusIcon from 'icons/PlusIcon';
import React, { useState } from 'react';
// import { stepTwoValidationSchema } from '../../../shared/services/FormValidation/addPetValidation';

import TitleModal from 'shared/components/TitleModal/TitleModal';
import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';

export const ThirdFormLost = ({ formData, currentStatus, title }) => {
  const [photo, setPhoto] = useState('');
  const [comments, setComments] = useState('');
  const [errors, setErrors] = useState({});

  //   const handleDone = () => {
  //     stepTwoValidationSchema
  //       .validate({ photo, comments }, { abortEarly: false })
  //       .then(() => {
  //         handleNextData({ photo, comments });
  //       })
  //       .catch(err => {
  //         const validationErrors = {};
  //         err.inner.forEach(error => {
  //           validationErrors[error.path] = error.message;
  //         });
  //         setErrors(validationErrors);
  //       });
  //   };
  const handleFileChange = e => {
    setPhoto(e.target.files[0]);
  };
  return (
    <div>
      <TitleModal title={"Add lost pet"} />

      <StatusIndicator currentStatus={currentStatus} />
      <div className={css.photoContainer}>
        <label className={css.labelAddPhoto}>Add photo</label>
        <div>
          <input
            type="file"
            id="photo"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
        <label htmlFor="photo">
          <div className={css.labelPhoto}>
            {photo && (
              <img
                className={css.previewPhoto}
                src={URL.createObjectURL(photo)}
                alt="Pet"
              />
            )}
            <PlusIcon className={css.plusIcon} color="#54adff" />
          </div>
        </label>
        {errors.photo && <p className={css.errorComent}>{errors.photo}</p>}
      </div>
      <div className={css.commentsContainerMyPet}>
        <label className={css.labelComments} htmlFor="comments">
          Comments
        </label>
        <textarea
          className={css.inputComments}
          id="comments"
          value={comments}
          placeholder="Type comment"
          onChange={e => setComments(e.target.value)}
        />
        {errors.comments && <p>{errors.comments}</p>}
      </div>
    </div>
  );
};