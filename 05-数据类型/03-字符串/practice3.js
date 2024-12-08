function truncate(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength - 1) + '...';
}

console.log(truncate("What I'd like to tell on this topic is:", 20))