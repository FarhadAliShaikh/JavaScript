const profile = {
    name: "Farhad Ali Shaikh",
    bio: "I am a web developer",
    isFollow: true,
    followers: 456,
    following: 123
}

console.log(profile);
console.log(typeof profile);
console.log(`My name is ${profile.name} (${typeof profile.name}) and ${profile.bio} (${typeof profile.bio}). I have ${profile.followers} (${typeof profile.followers}) followers and ${profile.following} (${typeof profile.following}) following. I am Follow (${profile.isFollow} ${typeof profile.isFollow}) to you.`);