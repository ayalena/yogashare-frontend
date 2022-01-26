function calculateProgress(event) {
   return (Math.round((100 * event.loaded) / event.total));
}

export default calculateProgress;