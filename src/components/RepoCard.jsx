const RepoCard = ({ repo }) => {
  return (
    <div className="px-5 py-3 bg-slate-200 rounded-md">
      <h3 className="font-bold text-xl">{repo.name}</h3>
      <p className="mb-4 text-slate-600">{repo.description}</p>
    </div>
  )
}

export default RepoCard
