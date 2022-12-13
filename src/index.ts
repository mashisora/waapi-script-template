import { connect } from 'waapic';

try {
  const client = await connect('ws://127.0.0.1:8080/waapi');
  const info = await client.call('ak.wwise.core.getInfo', {});
  console.log(`${info.displayName} ${info.version.displayName}`);

  // Write your scripts there.
  // ...

  await client.disconnect();
} catch (err) {
  console.log(err);
}
