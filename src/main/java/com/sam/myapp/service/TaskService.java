package com.sam.myapp.service;

import com.sam.myapp.domain.Task;
import com.sam.myapp.repository.TaskRepository;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * Service Implementation for managing {@link Task}.
 */
@Service
public class TaskService {

    private final Logger log = LoggerFactory.getLogger(TaskService.class);

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    /**
     * Save a task.
     *
     * @param task the entity to save.
     * @return the persisted entity.
     */
    public Task save(Task task) {
        log.debug("Request to save Task : {}", task);
        return taskRepository.save(task);
    }

    /**
     * Partially update a task.
     *
     * @param task the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<Task> partialUpdate(Task task) {
        log.debug("Request to partially update Task : {}", task);

        return taskRepository
            .findById(task.getId())
            .map(
                existingTask -> {
                    if (task.getName() != null) {
                        existingTask.setName(task.getName());
                    }
                    if (task.getDescription() != null) {
                        existingTask.setDescription(task.getDescription());
                    }
                    if (task.getCreatedDate() != null) {
                        existingTask.setCreatedDate(task.getCreatedDate());
                    }
                    if (task.getModifiedDate() != null) {
                        existingTask.setModifiedDate(task.getModifiedDate());
                    }
                    if (task.getLastModifiedBy() != null) {
                        existingTask.setLastModifiedBy(task.getLastModifiedBy());
                    }

                    return existingTask;
                }
            )
            .map(taskRepository::save);
    }

    /**
     * Get all the tasks.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    public Page<Task> findAll(Pageable pageable) {
        log.debug("Request to get all Tasks");
        return taskRepository.findAll(pageable);
    }

    /**
     * Get one task by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    public Optional<Task> findOne(String id) {
        log.debug("Request to get Task : {}", id);
        return taskRepository.findById(id);
    }

    /**
     * Delete the task by id.
     *
     * @param id the id of the entity.
     */
    public void delete(String id) {
        log.debug("Request to delete Task : {}", id);
        taskRepository.deleteById(id);
    }
}
