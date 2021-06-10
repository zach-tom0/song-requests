var AWS = require("aws-sdk")

exports.handler = async (event, context) => {
  var eventText = {
    name: event.request.name,
    song: event.request.song,
    artist: event.request.artist
  };

  let songRequestMessage = eventText.name
    + " wants you to play "
    + eventText.song
    + " by "
    + eventText.artist;

  var sns = new AWS.SNS();
  var params = {
      Message: songRequestMessage,
      Subject: "Song request from " + eventText.name,
      TopicArn: "arn:aws:sns:us-east-1:392073868385:songRequestTopic"
  };
  sns.publish(params, context.done);

  const response = {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      }
  };
  return response;
};
