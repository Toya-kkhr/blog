import Vue from "vue"

Vue.filter("dateformat", value => {
  return new Date(value).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
})
