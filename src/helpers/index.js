export const getCollatedTasks = (selectedProject) =>
  getCollatedTasksExist.find((task) => task.key === selectedProject);
