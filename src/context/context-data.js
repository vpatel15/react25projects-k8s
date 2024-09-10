const featuredFlags = {
  showAccordion: true,
  showColorGenerator: true,
  showStars: false,
  showCarousal: true
}

const GetFeaturedFlags = () => {
  return new Promise((resolve, reject) => {
    if (featuredFlags) {
      // @ts-ignore
      return setTimeout(resolve(featuredFlags), 3000)
    } else {
      reject('No feature flags available');
    }
  })
}

export default GetFeaturedFlags;