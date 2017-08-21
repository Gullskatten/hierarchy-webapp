import React, { Component } from 'react';
import ValidateForm from '../../containers/validateForm/ValidateForm';
import ValidateSecret from '../../containers/validateSecret/ValidateSecret';
import { connect } from 'react-redux';
import './GuardianModal.css';
import Loader from '../../components/Loader';

class GuardianModal extends Component {

  getInspiringWord() {

    const arrayOfWiseWords = [
      'If a friend considers you his friend, he might give you a token of trust...'
      /*'Yoda whispers: Good friend you are.. Token you must give.',
      'If you have a token, you may enter..',
      'Super-secret token goes in below..',
      'A token has no name..',
      'Come on! Paste in the referral-token from your friend below..',
      'You will soon find out if your friend fooled you.. :-)'*/
    ];

    const random = Math.floor(Math.random() * arrayOfWiseWords.length);




  return arrayOfWiseWords[random];
  }

  displayChallenges() {
    const isTokenChallengeSuccess = this.props.tokenValidator.isSuccess;
    const isSecretChallengeSuccess = this.props.secretValidator.isSuccess;
    const isLoading = this.props.loadingService.isLoading;

    console.log(isLoading);

    if(!isLoading) {
      if(isTokenChallengeSuccess) {
        return <ValidateSecret/>
      } else {
        return <ValidateForm/>
      }
    } else {
      return <Loader/>
    }
  }

  render() {
      return(
        <div className="overlay">
          <div className="guardian-modal animated fadeIn">
              <div className="guardian-modal-header">
                <h2>First Challenge</h2>
              </div>
              <div className="guardian-modal-body">
                <p>{this.getInspiringWord()}</p>
                {this.displayChallenges()}
              </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  tokenValidator: state.tokenValidator,
  secretValidator: state.secretValidator,
  loadingService: state.loadingService
});

export default connect(mapStateToProps)(GuardianModal);
