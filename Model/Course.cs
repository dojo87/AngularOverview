using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;

namespace AngularOverview.Model
{
    public class Course
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("id")]
        public string SlugId { get; set; }

        [BsonElement("slug")]
        public string Slug
        {
            get;
            set;
        }

        [BsonElement("title")]
        public string Title { get; set; }
        [BsonElement("author")]
        public string Author { get; set; }

        [BsonElement("sections")]
        public IEnumerable<Section> Sections { get; set; }
    }
}
