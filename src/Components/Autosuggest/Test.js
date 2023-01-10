import React, { Component, Fragment } from 'react';

const Autocomplete = ({suggestions}) => {
  const [activeSuggestion, setActiveSuggestion] = React.useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [userInput, setUserInput] = React.useState('');

  const onChange = (e) => {
    
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestionsRes = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestionsRes);
    setShowSuggestions(true);
    setUserInput(e.currentTarget.value);
  };

  const onClick = (e) => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
  };

  const onKeyDown = (e) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion]);
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  return (
    <Fragment>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
      />
      {showSuggestions && userInput && (
        <>
          {filteredSuggestions.length ? (
            <ul class="suggestions">
              {filteredSuggestions.map((suggestion, index) => {
                let className;

                // Flag the active suggestion with a class
                if (index === activeSuggestion) {
                  className = 'suggestion-active';
                }

                return (
                  <li className={className} key={suggestion} onClick={onClick}>
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="no-suggestions">
              <em>No suggestions, you're on your own!</em>
            </div>
          )}
        </>
      )}
    </Fragment>
  );
};
// class Autocomplete extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       // The active selection's index
//       activeSuggestion: 0,
//       // The suggestions that match the user's input
//       filteredSuggestions: [],
//       // Whether or not the suggestion list is shown
//       showSuggestions: false,
//       // What the user has entered
//       userInput: '',
//     };
//   }

//   onChange = (e) => {
//     const { suggestions } = this.props;
//     const userInput = e.currentTarget.value;

//     // Filter our suggestions that don't contain the user's input
//     const filteredSuggestions = suggestions.filter(
//       (suggestion) =>
//         suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
//     );

//     this.setState({
//       activeSuggestion: 0,
//       filteredSuggestions,
//       showSuggestions: true,
//       userInput: e.currentTarget.value,
//     });
//   };

//   onClick = (e) => {
//     this.setState({
//       activeSuggestion: 0,
//       filteredSuggestions: [],
//       showSuggestions: false,
//       userInput: e.currentTarget.innerText,
//     });
//   };

//   onKeyDown = (e) => {
//     const { activeSuggestion, filteredSuggestions } = this.state;

//     // User pressed the enter key
//     if (e.keyCode === 13) {
//       this.setState({
//         activeSuggestion: 0,
//         showSuggestions: false,
//         userInput: filteredSuggestions[activeSuggestion],
//       });
//     }
//     // User pressed the up arrow
//     else if (e.keyCode === 38) {
//       if (activeSuggestion === 0) {
//         return;
//       }

//       this.setState({ activeSuggestion: activeSuggestion - 1 });
//     }
//     // User pressed the down arrow
//     else if (e.keyCode === 40) {
//       if (activeSuggestion - 1 === filteredSuggestions.length) {
//         return;
//       }

//       this.setState({ activeSuggestion: activeSuggestion + 1 });
//     }
//   };

//   render() {
//     const {
//       onChange,
//       onClick,
//       onKeyDown,
//       state: {
//         activeSuggestion,
//         filteredSuggestions,
//         showSuggestions,
//         userInput,
//       },
//     } = this;

//     let suggestionsListComponent;

//     if (showSuggestions && userInput) {
//       if (filteredSuggestions.length) {
//         suggestionsListComponent = (
//           <ul class="suggestions">
//             {filteredSuggestions.map((suggestion, index) => {
//               let className;

//               // Flag the active suggestion with a class
//               if (index === activeSuggestion) {
//                 className = 'suggestion-active';
//               }

//               return (
//                 <li className={className} key={suggestion} onClick={onClick}>
//                   {suggestion}
//                 </li>
//               );
//             })}
//           </ul>
//         );
//       } else {
//         suggestionsListComponent = (
//           <div class="no-suggestions">
//             <em>No suggestions, you're on your own!</em>
//           </div>
//         );
//       }
//     }

//     return (
//       <Fragment>
//         <input
//           type="text"
//           onChange={onChange}
//           onKeyDown={onKeyDown}
//           value={userInput}
//         />
//         {suggestionsListComponent}
//       </Fragment>
//     );
//   }
// }

export default Autocomplete;
