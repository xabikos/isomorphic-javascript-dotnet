import React, {PropTypes} from 'react';

import SearchForm from './searchForm';
import RepositoriesList from './repositoriesList';
import RepositoryDetails from './repositoryDetails';

const MainContent = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <SearchForm search={props.search} />
      </div>
      <div className="col-md-5">
        <RepositoriesList
          repositories={props.repositories}
          selectRepository={props.selectRepository}
        />
      </div>
      <div className="col-md-4">
        <RepositoryDetails {...props.activeRepository} />
      </div>
    </div>
  </div>
);

MainContent.propTypes = {
  search: PropTypes.func.isRequired,
  repositories: PropTypes.array.isRequired,
  selectRepository: PropTypes.func.isRequired,
  activeRepository: PropTypes.object,
};

export default MainContent;
