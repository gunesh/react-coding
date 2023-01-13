import React, { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';

const Autocomplete = ({ options }) => {
  const [activeSuggestion, setActiveSuggestion] = React.useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [userInput, setUserInput] = React.useState('');

  const [inProp, setInProp] = React.useState(false);
  const nodeRef = React.useRef(null);

  const onChange = (e) => {
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestionsRes = options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    console.log(filteredSuggestionsRes);
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
    console.log('activeSuggestion', activeSuggestion);
    // User pressed the enter key
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion].label);
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
              {filteredSuggestions.map((option, index) => {
                let className;

                // Flag the active suggestion with a class
                if (index === activeSuggestion) {
                  className = 'suggestion-active';
                }

                return (
                  <li
                    className={className}
                    key={option.label}
                    onClick={onClick}
                  >
                    {option.label}
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

      {/* <div>
        <CSSTransition
          nodeRef={nodeRef}
          in={inProp}
          timeout={2000}
          classNames="my-node"
        >
          <div ref={nodeRef}>{"I'll receive my-node-* classes"}</div>
        </CSSTransition>
        <button type="button" onClick={() => setInProp(true)}>
          Click to Enter
        </button>
      </div> */}
    </Fragment>
  );
};
export default Autocomplete;
