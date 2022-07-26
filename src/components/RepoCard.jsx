const RepoCard = ({ repo }) => {
  return (
    <div className="px-5 py-3 bg-light-200 dark:bg-dark-300 rounded-md">
      <h3 className="font-bold text-xl text-primary-300">{repo.name}</h3>
      <p className="mb-4 text-dark-200 dark:text-light-200">
        {repo.description}
      </p>
    </div>
  )
}

export default RepoCard
