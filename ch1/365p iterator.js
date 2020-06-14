function makeIterator(array) {
  var nextIndex = 0
  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true }
    },
  }
}

var tasks = [
  {
    task: function () {
      console.log("hello from a")
    },
  },
  {
    task: function () {
      console.log("hello from b")
    },
  },
]

var taskRunnder = makeIterator(tasks)
taskRunnder.next().value.task()
taskRunnder.next().value.task()