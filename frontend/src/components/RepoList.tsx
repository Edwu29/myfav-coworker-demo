import React from 'react';
import { Repository } from '../types';

interface RepoListProps {
  repositories: Repository[];
}

const RepoList: React.FC<RepoListProps> = ({ repositories }) => {
  return (
    <div className="repo-list">
      {repositories.length === 0 ? (
        <p className="no-repos">No repositories found</p>
      ) : (
        <div className="repos-grid">
          {repositories.map((repo, index) => (
            <div key={index} className="repo-card">
              <div className="repo-header">
                <h4 className="repo-name">{repo.name}</h4>
                <div className="repo-stars">
                  ⭐ {repo.stars.toLocaleString()}
                </div>
              </div>
              
              {repo.description && (
                <p className="repo-description">{repo.description}</p>
              )}
              
              {repo.language && (
                <div className="repo-footer">
                  <span className={`language-tag ${repo.language.toLowerCase()}`}>
                    {repo.language}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepoList;
