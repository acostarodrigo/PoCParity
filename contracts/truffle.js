module.exports = {
  networks: {
  develop: {
    host: "127.0.0.1",
    port: 9545,
    network_id: "*" // match any network
  },
  parity: {
    host: "127.0.0.1",
    port: 8183,
    network_id: "*", // match any network
    gas: 0
  }
}
};
