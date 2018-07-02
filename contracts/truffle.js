module.exports = {
  networks: {
  develop: {
    host: "127.0.0.1",
    port: 9545,
    network_id: "*" // match any network
  },
  parity: {
    host: "127.0.0.1",
    port: 8540,
    network_id: "parity", // match any network
    from: "0x004ec07d2329997267Ec62b4166639513386F32E"
  }
}
};
