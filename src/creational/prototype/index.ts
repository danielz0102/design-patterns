import { TcpPacket } from './packets/TcpPacket'
import { UdpPacket } from './packets/UdpPacket'

const httpPacket = new TcpPacket({
  data: 'GET / HTTP/1.1',
  sourcePort: 80,
  destinationPort: 8080,
  sequenceNumber: 1,
  acknowledgmentNumber: 0
})

const streamingPacket = new UdpPacket({
  sourcePort: 1234,
  destinationPort: 5678,
  length: 20,
  data: 'Streaming data...'
})

httpPacket.send('example.com')
streamingPacket.send('example.com')

// Javascript is a prototype-based language, so we already have a way to copy objects.

// const newHttpPacket = Object.assign({}, httpPacket);

// In other languages, we need to implement the pattern manually
const otherHttpPacket = httpPacket.copy()
otherHttpPacket.data = 'POST /data HTTP/1.1'
otherHttpPacket.send('example.com')

const newStreamingPacket = new UdpPacket(streamingPacket)
newStreamingPacket.data = 'Updated streaming data...'
newStreamingPacket.send('example.com')
