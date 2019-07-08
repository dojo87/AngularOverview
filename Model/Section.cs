using MongoDB.Bson.Serialization.Attributes;

namespace AngularOverview.Model
{
    public class Section
    {
        [BsonElement("header")]
        public string Header
        {
            get;
            set;
        }

        [BsonElement("type")]
        public string Type { get; set; }

        [BsonElement("content")]
        public string Content { get; set; }
    }
}
