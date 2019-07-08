using System.Collections.Generic;
using AngularOverview.Model;
using MongoDB.Driver;

namespace AngularOverview.Services
{
    public class CourseService
    {
        private readonly IMongoCollection<Course> courses;

        public CourseService(IDatabaseSettings databaseSettings)
        {
            var client = new MongoClient(databaseSettings.ConnectionString);
            var database = client.GetDatabase(databaseSettings.DatabaseName);
            this.courses = database.GetCollection<Course>(databaseSettings.CollectionName);
        }

        public List<Course> Get() => this.courses.Find(c => true).ToList();

        public Course Get(string id) => this.courses.Find<Course>(c => c.Slug == id).FirstOrDefault();

        public Course Create(Course course)
        {
            this.courses.InsertOne(course); return course;
        }

        public void Update(string id, Course course) => this.courses.ReplaceOne(c => c.Id == id, course);

        public void Delete(string id) => this.courses.DeleteOne(c => c.Id == id);
    }
}
